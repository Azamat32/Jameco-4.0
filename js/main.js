let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const burgerMenu = document.querySelector('.nav_burger'); //выбрать где именно нарисован бургер и скрыт.
const menuList = document.querySelector('.nav_list'); //родительский элемент листа меню
const body = document.querySelector('body'); //это просто body для фиксации
const links = document.querySelectorAll('nav_links'); // ссылки меню

menuList.onclick = function hideMenu() {
    burgerMenu.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.remove('lockScroll');
}
burgerMenu.onclick = function showBurger() {
    this.classList.toggle('activeBurger');
    menuList.classList.toggle('activeBurger');
    body.classList.toggle('lockScroll');
}

let myBtn = document.querySelector(".btn");
let drop = document.getElementById("dropdown");

myBtn.addEventListener('click', () => {
    drop.classList.toggle("show");

})