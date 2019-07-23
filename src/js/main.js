// console.log('%c🚧 Website is under construction 🚧', "font-size: 32px");

const menuOpenBtn = document.querySelector('.menu-toggle-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menuContainer = document.querySelector('.main-navigation');


menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuContainer.classList.toggle('opened');
}