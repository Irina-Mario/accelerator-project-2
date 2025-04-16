import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function initHeroSlider() {
  new Swiper('.hero__swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,

    breakpoins: {
      1440: {
        allowTouchMove: false
      }
    },

    pagination: {
      el: '.hero__swiper-pagination',
      bulletClass: 'hero__pagination-control',
      bulletActiveClass: 'hero__pagination-control--active',
      type: 'bullets',
      clickable: true,
    },
  });
}

export { initHeroSlider };
