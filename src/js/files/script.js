// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



const showMoreBtns = document.querySelectorAll('.services__item-show-more');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const itemBottom = btn.parentNode.querySelector('.services__item-list');
    itemBottom.classList.toggle('show');
    btn.classList.toggle('rotated-arrow');
  });
});

// get all the elements with the class name 'full-video__play-button'
const playButtons = document.querySelectorAll(".full-video__play-button");
const videoText = document.querySelector('.full-video__text');
// loop through each play button and add click event listener
playButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const thumbnail = button.previousElementSibling; // get the thumbnail image
    const videoContainer = button.nextElementSibling; // get the video container

    thumbnail.style.display = "none"; // hide the thumbnail
    videoContainer.style.display = "block"; // show the video container
    if (!isMobileTest) {
      videoText.style.display = 'none';
    }
  });
});

const isMobileTest = window.matchMedia("(max-width: 767.98px)").matches;
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

//=====================================================HEADER===================================================================================================


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
    const dropdownId = button.parentNode.querySelector('.select-list').id;
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
  if (openDropdown !== null && !event.target.closest('.select-block')) {
    closeDropdown(openDropdown);
    openDropdown = null;
  }
});

const menuLinks = document.querySelectorAll('.menu__link-test');
const submenus = document.querySelectorAll('.menu__submenu');
const arrows = document.querySelectorAll('.menu-arrow');

function closeSubmenu() {
  submenus.forEach(submenu => {
    submenu.classList.remove('submenu-open');
  });
  arrows.forEach(arrow => {
    arrow.classList.remove('rotated');
  });
  toggleOverlay(false); // remove overlay when menu is closed
}

menuLinks.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    if (window.innerWidth > 991.98) { // check if screen width is greater than 992.98px
      closeSubmenu();
      submenus[index].classList.add('submenu-open');
      const arrow = link.nextElementSibling;
      arrow.classList.add('rotated');
      toggleOverlay(true); // add overlay when menu is open
    }
  });
});


arrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    const submenu = arrow.closest('.menu__item').querySelector('.menu__submenu');
    submenu.classList.toggle('submenu-open');
    arrow.classList.toggle('rotated');
    toggleOverlay(submenu.classList.contains('submenu-open'));
  });
});


document.addEventListener('click', (event) => {
  const isClickInsideMenu = event.target.closest('.header__bottom');
  if (!isClickInsideMenu) {
    closeSubmenu();
  }
});

// Set timeout variable
let timeoutId;

// Function to close submenu with delay
function closeSubmenuWithDelay() {
  // Set timeout to close submenu after 1000 milliseconds
  if (window.innerWidth > 991.98) { // check if screen width is greater than 992.98px
    timeoutId = setTimeout(closeSubmenu, 1000);
  }
}

// Event listener for when mouse leaves header__bottom
document.querySelector('.header__bottom').addEventListener('mouseleave', closeSubmenuWithDelay);

// Event listener for when mouse enters header__bottom
document.querySelector('.header__bottom').addEventListener('mouseenter', () => {
  // Clear the timeout to cancel submenu close
  clearTimeout(timeoutId);
});

if (window.innerWidth < 991.98) {
  const spoilerLinks = document.querySelectorAll('.menu__submenu-main-nav-item-wrap');
  const firstSubmenu = document.querySelector('.menu__submenu-sub-nav');

  firstSubmenu.style.display = 'flex';

  spoilerLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const submenu = link.nextElementSibling;
      const arrow = link.querySelector('._icon-arrow-right');

      if (submenu && submenu.style.display === 'flex') {
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
        if (submenu) {
          submenu.style.display = 'flex';
        }

        arrow.classList.add('open');
      }
    });
  });
}

const backButtonMenu = document.querySelector('.icon-menu');
const backButtons = document.querySelectorAll('.menu__submenu-main-nav-back');

// Click event listener for backButtonMenu
backButtonMenu.addEventListener('click', closeSubmenu);

// Loop through all back buttons and add click event listener
backButtons.forEach(backButton => {
  backButton.addEventListener('click', closeSubmenu);
});

const toggleOverlay = (open) => {
  const overlay = document.querySelector('.overlay');
  if (open && window.innerWidth > 991.98) {
    if (!overlay) {
      // Create a new div element to darken the background
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      // Add the overlay to the body
      document.body.appendChild(overlay);
    } else {
      // Show the existing overlay
      overlay.style.display = 'block';
    }
  } else if (!open && overlay) {
    // Remove the overlay if the menu is closed or the width is greater than 991.98px
    overlay.style.display = 'none';
  }
};
//===========================================================HEADER=============================================================================================


//========================================================================================================================================================

// Add this JavaScript code to handle button and dropdown menu interactions
const filterDropdown = document.getElementById("filter-dropdown");
const filterButton = document.getElementById("filter-btn");

if (filterButton) {
  filterButton.onclick = function () {
    filterDropdown.classList.toggle("show");
    filterButton.classList.toggle("rotated-arrow");
  }
}


if (filterDropdown) {
  filterDropdown.onclick = function (event) {
    const selected = event.target.innerText;
    filterButton.innerText = selected;
    filterDropdown.classList.toggle("show");
    filterButton.classList.toggle("rotated-arrow");
  }
}
if (document.querySelectorAll('.energiekennis-term__terms-text')) {

}


// The error "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" occurs because the element with the class '.energiekennis-term__filter-right' is not found on the page. To prevent the error, you can check if the element exists before adding the event listener.

// Get the list of terms
const terms = document.querySelectorAll('.energiekennis-term__terms-text li');
const filterLetters = document.querySelectorAll('.energiekennis-term__filter li');

// Function to filter terms based on selected letter
function filterTerms(letter) {
  // Hide all terms except those that start with the selected letter
  terms.forEach((term) => {
    term.style.display = term.querySelector('a').innerText.startsWith(letter) ? 'flex' : 'none';
  });
}

// Function to show all terms
function showAllTerms() {
  // Remove active class from all filter letters
  filterLetters.forEach((letter) => {
    letter.classList.remove('active');
  });

  // Show all terms
  terms.forEach((term) => {
    term.style.display = 'inline-block';
  });
}

// Function to update the active filter letter
function updateActiveFilter(index) {
  // Check if the index is within the range of the filterLetters array
  if (index >= 0 && index < filterLetters.length) {
    // Add active class to the selected filter letter
    filterLetters[index].classList.add('active');

    // Filter the terms based on the selected letter
    filterTerms(filterLetters[index].innerText);
  }
}

// Add event listener to the filter
filterLetters.forEach((letter, index) => {
  letter.addEventListener('click', (event) => {
    const selectedLetter = event.target.innerText;

    // Remove active class from all letters
    filterLetters.forEach((letter) => {
      letter.classList.remove('active');
    });

    // Add active class to the selected letter
    letter.classList.add('active');

    // Filter the terms based on the selected letter
    filterTerms(selectedLetter);

    // Update the active index based on the selected letter
    activeIndex = index;
  });
});

// Get the "energiekennis-term__show-more-button" button element
const showMoreButton = document.querySelector('.energiekennis-term__show-more-button');

if (showMoreButton) {
  showMoreButton.addEventListener('click', () => {
    // Call the function to show all terms
    showAllTerms();
  });
}

// Check if the forward arrow element exists before adding the event listener
const filterRightArrow = document.querySelector('.energiekennis-term__filter-right');
if (filterRightArrow) {
  filterRightArrow.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % filterLetters.length;
    filterLetters[activeIndex].click();
  });
}

// Check if the backward arrow element exists before adding the event listener
const filterLeftArrow = document.querySelector('.energiekennis-term__filter-left');
if (filterLeftArrow) {
  filterLeftArrow.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + filterLetters.length) % filterLetters.length;
    filterLetters[activeIndex].click();
  });
}

// Initialize the active index variable
let activeIndex = 0;
updateActiveFilter(activeIndex);

//========================================================================================================================================================

