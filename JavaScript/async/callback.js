'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1');  // 동기
setTimeout(() => console.log('2'), 1000); // 비동기 // 1000밀리세컨드는 1초
console.log('3'); // 동기

// Synchronous callback
function printImmediately(print) {  // 함수 선언은 hoisting되서 맨 위에서 제일 먼저 실행됨
    print();
}

printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'yujung' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'yujung') {
                onSuccess({ name: 'yujung', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);       
    }
} 

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
































