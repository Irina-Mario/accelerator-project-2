import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


function initToursSlider() {
  new Swiper('.tours__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 50,
    breakpoins: {
      768: {
        slidesPerView: 2,
        allowTouchMove: false,
        spaceBetween: 18,
        navigation: {
          nextEl: '.tours__navigation-button--next',
          prevEl: '.tours__navigation-button--prev',
        },
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });
}

export { initToursSlider };
