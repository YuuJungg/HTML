const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clecked');
    title.classList.toggle('clamp');

});