// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Cache elements for better performance
const onsAanbodLink = document.querySelector('.menu__link');
const subMenu = document.querySelector('.menu__submenu');
const arrow = document.querySelector('.menu-arrow');
const backButtonMenu = document.querySelector('.icon-menu');
const backButton = document.querySelector('.menu__submenu-main-nav-back');

let timeoutId;
let menuOpen = false;

// Toggle menu function
const toggleMenu = () => {
  subMenu.classList.toggle('submenu-open');
  arrow.classList.toggle('rotated');
  menuOpen = subMenu.classList.contains('submenu-open');
}

// Click event listener for onsAanbodLink
onsAanbodLink.addEventListener('click', toggleMenu);

// Click event listener for backButtonMenu
backButtonMenu.addEventListener('click', () => {
  subMenu.classList.remove('submenu-open');
  arrow.classList.toggle('rotated');
});

// Click event listener for backButton
backButton.addEventListener('click', () => {
  subMenu.classList.remove('submenu-open');
  arrow.classList.toggle('rotated');
});



if (window.innerWidth > 991.98) {

  onsAanbodLink.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    if (!menuOpen) {
      toggleMenu();
    }
  });

  const closeMenu = () => {
    subMenu.classList.remove('submenu-open');
    arrow.classList.remove('rotated');
    menuOpen = false;
  }

  onsAanbodLink.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(closeMenu, 1000);
  });

  subMenu.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(closeMenu, 500);
  });

  subMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
  });
}

if (window.innerWidth < 991.98) {
  const spoilerLinks = document.querySelectorAll('.menu__submenu-main-nav-item-wrap');
  const firstSubmenu = document.querySelector('.menu__submenu-sub-nav');

  firstSubmenu.style.display = 'flex';

  spoilerLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const submenu = link.nextElementSibling;
      const arrow = link.querySelector('._icon-arrow-right');

      if (submenu.style.display === 'flex') {
        // Submenu is already open, close it
        submenu.style.display = 'none';
        arrow.classList.remove('open');
      } else {
        // Close any other open submenus
        const openSubmenus = document.querySelectorAll('.menu__submenu-sub-nav[style="display: flex;"]');
        openSubmenus.forEach(openSubmenu => {
          openSubmenu.style.display = 'none';
          const openArrow = openSubmenu.previousElementSibling.querySelector('._icon-arrow-right');
          openArrow.classList.remove('open');
        });

        // Open this submenu
        submenu.style.display = 'flex';
        arrow.classList.add('open');
      }
    });
  });

}






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


// Keep track of the currently open dropdown
let openDropdown = null;

// Get all the elements that match the "select-button" selector
const selectButtons = document.querySelectorAll('.select-button');

// Add the event listener to each element
selectButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Get the ID of the corresponding dropdown menu
    const dropdownId = button.parentNode.querySelector('.klantverhalen-hero__select-list').id;
    // Check if there is an open dropdown
    if (openDropdown !== null) {
      // If there is, close it
      closeDropdown(openDropdown);
      if (openDropdown === dropdownId) {
        openDropdown = null;
        return;
      }
    }

    // Open the selected dropdown
    openDropdown = dropdownId;
    showDropdown(dropdownId);
    button.classList.add('selected');
  });
});

function showDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function closeDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display = "none";
  document.querySelector('.selected').classList.remove('selected');
}

// Add event listener to the document
document.addEventListener('click', function (event) {
  // Check if the target element of the click is outside of the open dropdown menu
  if (openDropdown !== null && !event.target.closest('.klantverhalen-hero__select-block')) {
    closeDropdown(openDropdown);
    openDropdown = null;
  }
});

