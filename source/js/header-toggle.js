// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const modalMenu = document.querySelector('.navigation');
const toggleElement = document.querySelector('.header__toggle-button');
const menuItems = document.querySelectorAll('.navigation__link');

function showMenu() {
  toggleElement.addEventListener('click', () => {
    toggleElement.classList.toggle('header__toggle-button--close');
    modalMenu.classList.toggle('navigation--show');
  });
}

function closeMenu() {
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      modalMenu.classList.remove('navigation--show');
    });
  });
}

export { showMenu };
export { closeMenu };
