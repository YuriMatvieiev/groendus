/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
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
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import "swiper/css";
// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".home-hero__slider")) {
    // Указываем скласс нужного слайдера

    const slidePlays = document.querySelectorAll(".home-hero__slide-play");

    let hoverTimeout;

    slidePlays.forEach((slidePlay) => {
      slidePlay.addEventListener("mouseenter", () => {
        clearTimeout(hoverTimeout);
        slidePlay.classList.add("hovered");
      });

      slidePlay.addEventListener("mouseleave", () => {
        hoverTimeout = setTimeout(() => {
          slidePlay.classList.remove("hovered");
        }, 2000); // Adjust the time (in milliseconds) as needed
      });
    });

    const progressCircles = document.querySelectorAll(".test-svg");
    function updateProgressCircles(s, time, progress) {
      progressCircles.forEach((circle) => {
        circle.style.setProperty("--progress", 1 - progress);
      });
    }
    new Swiper(".home-hero__slider", {
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      spaceBetween: 300,
      autoHeight: false,
      speed: 800,
      loop: true,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".energiekennis-slider__swiper-button-prev",
        nextEl: ".energiekennis-slider__swiper-button-next",
      },
      on: {
        autoplayTimeLeft: updateProgressCircles,
      },
    });
  }
  if (document.querySelector(".home-solutions__slider")) {
    // Указываем скласс нужного слайдера

    new Swiper(".home-solutions__slider", {
      modules: [Navigation],

      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 800,
      loop: true,

      navigation: {
        prevEl: ".home-solutions__swiper-button-prev",
        nextEl: ".home-solutions__swiper-button-next",
      },
      breakpoints: {
        375: {
          centeredSlides: true,
          autoHeight: true,
        },
        479.98: {
          autoHeight: false,
          centeredSlides: false,
        },
      },
      on: {},
    });
  }
  if (document.querySelector(".home-steps__slider")) {
    // Указываем скласс нужного слайдера
    const progressCircles = document.querySelectorAll(
      ".home-steps__button-svg"
    );
    function updateProgressCircles(s, time, progress) {
      progressCircles.forEach((circle) => {
        circle.style.setProperty("--progress", 1 - progress);
      });
    }
    new Swiper(".home-steps__slider", {
      modules: [Navigation, Autoplay, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      allowTouchMove: false,
      slidesPerView: "1",
      spaceBetween: 0,
      speed: 800,
      loop: true,

      autoplay: {
        delay: 30000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".steps-prev",
        nextEl: ".steps-next",
      },

      on: {
        autoplayTimeLeft: updateProgressCircles,
      },
    });
  }
  if (document.querySelector(".home-news__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".home-news__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],

      slidesPerView: "auto",
      spaceBetween: 20,
      autoHeight: false,
      speed: 800,
      loop: true,
    });
  }
  if (document.querySelector(".beheren-slider__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".beheren-slider__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],

      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      loop: true,
      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 16,
          autoHeight: true,
        },
        375: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
  if (document.querySelector(".opwekken-slider__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".opwekken-slider__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],

      slidesPerView: "auto",
      spaceBetween: 40,
      autoHeight: false,
      speed: 800,
      loop: true,

      // Брейкпоинты
      breakpoints: {
        375: {
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 25,
        },
        1440: {
          slidesPerView: "auto",
          spaceBetween: 40,
        },
      },
    });
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    // Create the slider
    new Swiper(".productpagina-options__slider", {
      modules: [Navigation],

      slidesPerView: "auto",
      spaceBetween: 15,
      autoHeight: false,
      speed: 800,
      loop: true,
      // Events
    });
  }
  if (document.querySelector(".energiekennis-slider__slider")) {
    // Указываем скласс нужного слайдера
    const slides = document.querySelectorAll(".energiekennis-slider__slide");
    const bottomItems = document.querySelectorAll(
      ".energiekennis-slider__bottom-item"
    );

    function setActiveSlide(index) {
      const activeSlideTitle = slides[index].querySelector(
        ".energiekennis-slider__slide-title"
      ).textContent;

      bottomItems.forEach((item) => {
        if (item.textContent === activeSlideTitle) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    setActiveSlide(0);
    const progressCircles = document.querySelectorAll(".test-svg");
    function updateProgressCircles(s, time, progress) {
      progressCircles.forEach((circle) => {
        circle.style.setProperty("--progress", 1 - progress);
      });
    }
    new Swiper(".energiekennis-slider__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],

      slidesPerView: "1",
      spaceBetween: 40,
      autoHeight: true,
      speed: 800,
      loop: true,

      // Эффекты
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".energiekennis-slider__swiper-button-prev",
        nextEl: ".energiekennis-slider__swiper-button-next",
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
          slidesPerView: "1",
          spaceBetween: 50,
        },
      },
      // События
      on: {
        slideChange: function () {
          setActiveSlide(this.realIndex);
        },
        autoplayTimeLeft: updateProgressCircles,
      },
    });
  }
  if (document.querySelector(".campagne__slider")) {
    // Указываем скласс нужного слайдера

    new Swiper(".campagne__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: "1",
      spaceBetween: 40,
      autoHeight: true,
      speed: 800,
      loop: true,

      autoplay: {
        delay: 9000,
        disableOnInteraction: true,
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
          slidesPerView: "1",
          spaceBetween: 50,
        },
      },
      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
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
