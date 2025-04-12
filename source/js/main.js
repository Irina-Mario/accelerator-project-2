// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { showMenu } from './header-toggle';
import { closeMenu } from './header-toggle';
import { initSlider } from './hero-swiper';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  closeMenu();
  initSlider();
});
