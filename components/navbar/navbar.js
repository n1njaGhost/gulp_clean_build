const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('active');
        menuList.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('active');
        menuList.classList.remove('active')
        menuOpen = false;
    }
});