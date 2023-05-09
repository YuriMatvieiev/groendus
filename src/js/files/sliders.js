/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.beheren-slider__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.beheren-slider__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      /* navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }, */

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16,
          autoHeight: true,
        },
        375: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      // События
      on: {

      }
    });
  }
  if (document.querySelector('.opwekken-slider__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.opwekken-slider__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      autoHeight: false,
      speed: 800,
      loop: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      /* navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }, */

      // Брейкпоинты
      breakpoints: {
        375: {
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 25,
        },
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 40,
        },
      },
      // События
      on: {

      }
    });
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    // Create the slider
    new Swiper('.productpagina-options__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 15,
      autoHeight: false,
      speed: 800,
      loop: true,
      // Events
      on: {
        // ...
      }
    });
  }
  if (document.querySelector('.energiekennis-slider__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    const canvas = document.getElementById('canvas');


    const context = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 16;

    context.lineWidth = 2;
    context.strokeStyle = '#006EFF';
    context.fillStyle = '#ffffff';

    let progress = 0;
    const endAngle = 2 * Math.PI;

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      context.arc(centerX, centerY, radius, -Math.PI / 2, progress * endAngle - Math.PI / 2);
      context.stroke();

      if (progress >= 1) {
        clearInterval(intervalId);
      } else {
        progress += 0.01;
      }
    }

    let intervalId = setInterval(draw, 10);
    new Swiper('.energiekennis-slider__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: '1',
      spaceBetween: 40,
      autoHeight: false,
      speed: 800,
      loop: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.energiekennis-slider__swiper-button-prev',
        nextEl: '.energiekennis-slider__swiper-button-next',
      },

      // Брейкпоинты
      breakpoints: {
        375: {
          spaceBetween: 50,
        },
        768: {
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: '1',
          spaceBetween: 50,
        },
      },
      // События
      on: {
        init: function () {
          // Reset the progress variable and start a new interval to redraw the circle
          progress = 0;
          clearInterval(intervalId);
          intervalId = setInterval(draw, 55);
        },
        slideChange: function () {
          // Reset the progress variable and start a new interval to redraw the circle
          progress = 0;
          clearInterval(intervalId);
          intervalId = setInterval(draw, 55);
        },
      }
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});