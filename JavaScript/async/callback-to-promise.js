// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
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
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'yujung') {
                    onSuccess({ name: 'yujung', role: 'admin' });
                } else {
                    onError(new Error('no access'));
                }
            }, 1000);  
        });
    }
} 

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);


