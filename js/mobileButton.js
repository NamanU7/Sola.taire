const mobileBtn = document.getElementById('mobile-cta');
const mobileExit = document.getElementById('mobile-exit');
const nav = document.querySelector('nav');

mobileBtn.addEventListener('click', () => {
    console.log("clicked mobile button");
    nav.classList.add('menu-btn');
});

mobileExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});