// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Отримання ширини скролу

const onsAanbodLink = document.querySelector('.menu__link');
const submenu = document.querySelector('.menu__submenu');
const arrow = document.querySelector('.menu-arrow');
let timeoutId;
let menuOpen = false;

const toggleMenu = () => {
  submenu.classList.toggle('submenu-open');
  arrow.classList.toggle('rotated');
  menuOpen = submenu.classList.contains('submenu-open');
}

onsAanbodLink.addEventListener('click', toggleMenu);

onsAanbodLink.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  if (!menuOpen) {
    toggleMenu();
  }
});

const closeMenu = () => {
  submenu.classList.remove('submenu-open');
  arrow.classList.remove('rotated');
  menuOpen = false;
}

onsAanbodLink.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(closeMenu, 1000);
});

submenu.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(closeMenu, 500);
});

submenu.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});


// Get the button element
const button = document.querySelector('.header__top-first-button');

// Get the menu element
const menu = document.querySelector('.header__top-menu');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Toggle the menu's visibility by adding or removing the 'active' class
  menu.classList.toggle('active');
});




const showMoreBtns = document.querySelectorAll('.services__item-show-more');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const itemBottom = btn.parentNode.querySelector('.services__item-list');
    itemBottom.classList.toggle('show');
    btn.classList.toggle('rotated-arrow');
  });
});


const playButton = document.querySelector('.full-video__play-button');
const videoThumbnail = document.querySelector('.full-video__img');
const videoText = document.querySelector('.full-video__text');
const isMobileTest = window.matchMedia("(max-width: 767.98px)").matches;
const videoPlayerBlock = document.querySelector('.full-video__iframe');
if (videoPlayerBlock) {
  const videoPlayer = videoPlayerBlock.querySelector('iframe');
  playButton.addEventListener('click', function () {
    videoThumbnail.style.display = 'none';
    videoPlayerBlock.style.display = 'block';
    videoPlayer.src += '&autoplay=1';
    playButton.style.display = 'none';

    if (!isMobileTest) {
      videoText.style.display = 'none';
    }
  });
}

const vooropItem = document.querySelectorAll('.voorop__item');

vooropItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    if (!isMobileTest) {
      item.classList.add('voorop__item-active');
    }
  });

  item.addEventListener('mouseout', () => {
    if (!isMobileTest) {
      item.classList.remove('voorop__item-active');
    }
  });
});

const testItem = document.querySelectorAll(' .productpagina-options__slide');

testItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    if (!isMobileTest) {
      item.classList.add('productpagina-options__slide-active');
    }
  });

  item.addEventListener('mouseout', () => {
    if (!isMobileTest) {
      item.classList.remove('productpagina-options__slide-active');
    }
  });
});

const opwekkenLink = document.getElementById('opwekken-link');
const inzichtLink = document.getElementById('inzicht-link');
const duurzaamLink = document.getElementById('duurzaam-link');
const opwekkenSubmenu = document.getElementById('opwekken');
const inzichtSubmenu = document.getElementById('inzicht');
const duurzaamSubmenu = document.getElementById('duurzaam');

function showSubmenu(submenu, link) {
  opwekkenSubmenu.style.display = 'none';
  inzichtSubmenu.style.display = 'none';
  duurzaamSubmenu.style.display = 'none';
  submenu.style.display = 'flex';
  opwekkenLink.classList.remove('active');
  inzichtLink.classList.remove('active');
  duurzaamLink.classList.remove('active');
  link.classList.add('active');
}

opwekkenLink.addEventListener('click', () => {
  showSubmenu(opwekkenSubmenu, opwekkenLink);
});

inzichtLink.addEventListener('click', () => {
  showSubmenu(inzichtSubmenu, inzichtLink);
});

duurzaamLink.addEventListener('click', () => {
  showSubmenu(duurzaamSubmenu, duurzaamLink);
});
