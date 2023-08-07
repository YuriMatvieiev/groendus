// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import AOS from "aos";
import "aos/dist/aos.css";
//=====================================================HEADER===================================================================================================

// Select the elements using querySelector instead of getElementById for brevity
const opwekkenLink = document.querySelector("#opwekken-link");
const inzichtLink = document.querySelector("#inzicht-link");
const duurzaamLink = document.querySelector("#duurzaam-link");
const opwekkenSubmenu = document.querySelector("#opwekken");
const inzichtSubmenu = document.querySelector("#inzicht");
const duurzaamSubmenu = document.querySelector("#duurzaam");

function showSubmenu(submenu, link) {
  // Hide all submenus
  opwekkenSubmenu.style.display = "none";
  inzichtSubmenu.style.display = "none";
  duurzaamSubmenu.style.display = "none";

  // Display the selected submenu
  submenu.style.display = "flex";

  // Remove "active" class from all links
  opwekkenLink.classList.remove("active");
  inzichtLink.classList.remove("active");
  duurzaamLink.classList.remove("active");

  // Add "active" class to the selected link
  link.classList.add("active");
}

// Add event listeners to the links
opwekkenLink.addEventListener("mouseover", () => {
  showSubmenu(opwekkenSubmenu, opwekkenLink);
});

inzichtLink.addEventListener("mouseover", () => {
  showSubmenu(inzichtSubmenu, inzichtLink);
});

duurzaamLink.addEventListener("mouseover", () => {
  showSubmenu(duurzaamSubmenu, duurzaamLink);
});

// Keep track of the currently open dropdown
let openDropdown = null;

// Get all the elements that match the "select-button" selector
const selectButtons = document.querySelectorAll(".select-button");

// Add the event listener to each element
selectButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the ID of the corresponding dropdown menu
    const dropdownId = button.parentNode.querySelector(".select-list").id;
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
    button.classList.add("selected");
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
  document.querySelector(".selected").classList.remove("selected");
}

// Add event listener to the document
document.addEventListener("click", function (event) {
  // Check if the target element of the click is outside of the open dropdown menu
  if (openDropdown !== null && !event.target.closest(".select-block")) {
    closeDropdown(openDropdown);
    openDropdown = null;
  }
});

const menuLinks = document.querySelectorAll(".menu__link-test");
const submenusWrap = document.querySelectorAll(".menu__submenu-wrap");
const arrows = document.querySelectorAll(".menu-arrow");

function closeSubmenu() {
  submenusWrap.forEach((submenu) => {
    submenu.classList.remove("submenu-open");
  });
  arrows.forEach((arrow) => {
    arrow.classList.remove("rotated");
  });
  toggleOverlay(false); // remove overlay when menu is closed
}

menuLinks.forEach((link, index) => {
  link.addEventListener("mouseover", () => {
    if (window.innerWidth > 991.98) {
      // check if screen width is greater than 992.98px
      closeSubmenu();
      submenusWrap[index].classList.add("submenu-open");
      const arrow = link.nextElementSibling;
      arrow.classList.add("rotated");
      toggleOverlay(true); // add overlay when menu is open
    }
  });
});

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    const submenu = arrow
      .closest(".menu__item")
      .querySelector(".menu__submenu-wrap");
    submenu.classList.toggle("submenu-open");
    arrow.classList.toggle("rotated");
    toggleOverlay(submenu.classList.contains("submenu-open"));
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = event.target.closest(".header__bottom");
  if (!isClickInsideMenu) {
    closeSubmenu();
  }
});

// Set timeout variable
let timeoutId;

// Function to close submenu with delay
function closeSubmenuWithDelay() {
  // Set timeout to close submenu after 1000 milliseconds
  if (window.innerWidth > 991.98) {
    // check if screen width is greater than 992.98px
    timeoutId = setTimeout(closeSubmenu, 1000);
  }
}

// Event listener for when mouse leaves header__bottom
document
  .querySelector(".header__bottom")
  .addEventListener("mouseleave", closeSubmenuWithDelay);

// Event listener for when mouse enters header__bottom
document.querySelector(".header__bottom").addEventListener("mouseenter", () => {
  // Clear the timeout to cancel submenu close
  clearTimeout(timeoutId);
});

if (window.innerWidth < 991.98) {
  const spoilerLinks = document.querySelectorAll(
    ".menu__submenu-main-nav-item-wrap"
  );

  spoilerLinks.forEach((link, index) => {
    const arrow = link.querySelector("._icon-arrow-right");
    const submenu = link.nextElementSibling;
    const anchor = link.querySelector("a");

    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (submenu.style.display === "flex") {
        // Submenu is already open, close it
        submenu.style.display = "none";
        arrow.classList.remove("open");
      } else {
        // Close any other open submenus
        const openSubmenus = document.querySelectorAll(
          '.menu__submenu-sub-nav[style="display: flex;"]'
        );
        openSubmenus.forEach((openSubmenu) => {
          openSubmenu.style.display = "none";
          const openArrow =
            openSubmenu.previousElementSibling.querySelector(
              "._icon-arrow-right"
            );
          openArrow.classList.remove("open");
        });

        // Open this submenu
        submenu.style.display = "flex";
        arrow.classList.add("open");
      }
    });

    anchor.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Open the first spoiler by default
    if (index === 0) {
      submenu.style.display = "flex";
      arrow.classList.add("open");
    }
  });
}

const backButtonMenu = document.querySelector(".icon-menu");
const backButtons = document.querySelectorAll(".menu__submenu-main-nav-back");

// Click event listener for backButtonMenu
backButtonMenu.addEventListener("click", closeSubmenu);

// Loop through all back buttons and add click event listener
backButtons.forEach((backButton) => {
  backButton.addEventListener("click", closeSubmenu);
});

const toggleOverlay = (open) => {
  const overlay = document.querySelector(".overlay");
  if (open && window.innerWidth > 991.98) {
    if (!overlay) {
      // Create a new div element to darken the background
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      // Add the overlay to the body
      document.body.appendChild(overlay);
    } else {
      // Show the existing overlay
      overlay.style.display = "block";
    }
  } else if (!open && overlay) {
    // Remove the overlay if the menu is closed or the width is greater than 991.98px
    overlay.style.display = "none";
  }
};
//===========================================================HEADER=============================================================================================

//=====================================beheren page spoiller===================================================================================================================

const showMoreBtns = document.querySelectorAll(".services__item-show-more");

showMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const itemBottom = btn.parentNode.querySelector(".services__item-list");
    itemBottom.classList.toggle("show");
    btn.classList.toggle("rotated-arrow");
  });
});

//========================================================================================================================================================

//=====================================video play button===================================================================================================================

import Plyr from "plyr";

const playButtons = document.querySelectorAll(".full-video__play-button");
const videoTexts = document.querySelectorAll("#full-video__text");

playButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const thumbnail = button.previousElementSibling;
    const videoContainer = button.nextElementSibling;

    thumbnail.style.display = "none";
    videoContainer.style.display = "block";

    // Play the video
    const iframe = videoContainer.querySelector("iframe");
    if (iframe) {
      iframe.src += "&autoplay=1"; // Add autoplay parameter to the video URL
    }

    // Hide the video text
    videoTexts.forEach(function (videoText) {
      if (videoText) {
        videoText.style.display = "none";
      }
    });
  });
});

//========================================================================================================================================================

//====================================productpagina page====================================================================================================================

const isMobileTest = window.matchMedia("(max-width: 767.98px)").matches;
const vooropItem = document.querySelectorAll(".voorop__item");

vooropItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (!isMobileTest) {
      item.classList.add("voorop__item-active");
    }
  });

  item.addEventListener("mouseout", () => {
    if (!isMobileTest) {
      item.classList.remove("voorop__item-active");
    }
  });
});

const testItem = document.querySelectorAll(" .productpagina-options__slide");

testItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (!isMobileTest) {
      item.classList.add("productpagina-options__slide-active");
    }
  });

  item.addEventListener("mouseout", () => {
    if (!isMobileTest) {
      item.classList.remove("productpagina-options__slide-active");
    }
  });
});
//========================================================================================================================================================

//===============================energiekennis filter button=========================================================================================================================

// Add this JavaScript code to handle button and dropdown menu interactions
const filterDropdown = document.getElementById("filter-dropdown");
const filterButton = document.getElementById("filter-btn");

if (filterButton) {
  filterButton.onclick = function () {
    filterDropdown.classList.toggle("show");
    filterButton.classList.toggle("rotated-arrow");
  };
}

if (filterDropdown) {
  filterDropdown.onclick = function (event) {
    const selected = event.target.innerText;
    filterButton.innerText = selected;
    filterDropdown.classList.toggle("show");
    filterButton.classList.toggle("rotated-arrow");
  };
}
//===============================energiekennis terms=========================================================================================================================

// Get the list of terms
const terms = document.querySelectorAll(".energiekennis-term__terms-text li");
const filterLetters = document.querySelectorAll(
  ".energiekennis-term__filter li"
);

// Function to filter terms based on selected letter
function filterTerms(letter) {
  // Hide all terms except those that start with the selected letter
  terms.forEach((term) => {
    term.style.display = term.querySelector("a").innerText.startsWith(letter)
      ? "flex"
      : "none";
  });
}

// Function to show all terms
function showAllTerms() {
  // Remove active class from all filter letters
  filterLetters.forEach((letter) => {
    letter.classList.remove("active");
  });

  // Show all terms
  terms.forEach((term) => {
    term.style.display = "inline-block";
  });
}

// Function to update the active filter letter
function updateActiveFilter(index) {
  // Check if the index is within the range of the filterLetters array
  if (index >= 0 && index < filterLetters.length) {
    // Add active class to the selected filter letter
    filterLetters[index].classList.add("active");

    // Filter the terms based on the selected letter
    filterTerms(filterLetters[index].innerText);
  }
}

// Add event listener to the filter
filterLetters.forEach((letter, index) => {
  letter.addEventListener("click", (event) => {
    const selectedLetter = event.target.innerText;

    // Remove active class from all letters
    filterLetters.forEach((letter) => {
      letter.classList.remove("active");
    });

    // Add active class to the selected letter
    letter.classList.add("active");

    // Filter the terms based on the selected letter
    filterTerms(selectedLetter);

    // Update the active index based on the selected letter
    activeIndex = index;
  });
});

// Get the "energiekennis-term__show-more-button" button element
const showMoreButton = document.querySelector(
  ".energiekennis-term__show-more-button"
);

if (showMoreButton) {
  showMoreButton.addEventListener("click", () => {
    // Call the function to show all terms
    showAllTerms();
  });
}

// Check if the forward arrow element exists before adding the event listener
const filterRightArrow = document.querySelector(
  ".energiekennis-term__filter-right"
);
if (filterRightArrow) {
  filterRightArrow.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % filterLetters.length;
    filterLetters[activeIndex].click();
  });
}

// Check if the backward arrow element exists before adding the event listener
const filterLeftArrow = document.querySelector(
  ".energiekennis-term__filter-left"
);
if (filterLeftArrow) {
  filterLeftArrow.addEventListener("click", () => {
    activeIndex =
      (activeIndex - 1 + filterLetters.length) % filterLetters.length;
    filterLetters[activeIndex].click();
  });
}

// Initialize the active index variable
let activeIndex = 0;
updateActiveFilter(activeIndex);

//========================================================================================================================================================

const cookieInstellingenButton = document.getElementById("cookieInstellingen");
const cookiesList = document.querySelector(".cookies__list");

cookieInstellingenButton.addEventListener("click", () => {
  cookiesList.classList.toggle("visible");
});

// Check if the "cookieConsent" cookie is set
var cookieConsent = getCookie("cookieConsent");

// If the cookie is not set, show the cookie message
if (!cookieConsent) {
  document.querySelector(".cookies").style.display = "block";
} else {
  // Hide the cookie message if the cookie is set
  document.querySelector(".cookies").style.display = "none";

  // Load scripts based on user selection
  loadScripts();
}

// Handle the click event on the "Accepteer cookies" button
document
  .getElementById("accepteerCookies")
  .addEventListener("click", function () {
    var functioneelCheckbox = document.getElementById("functioneel");
    var analyticsCheckbox = document.getElementById("analytisch");
    var marketingCheckbox = document.getElementById("marketing");

    // Set the "cookieConsent" cookie with the selected options as its value and an expiration date
    var cookieValue = "";
    if (functioneelCheckbox.checked) {
      cookieValue += "Functioneel ";
    }
    if (analyticsCheckbox.checked) {
      cookieValue += "Analytisch ";
    }
    if (marketingCheckbox.checked) {
      cookieValue += "Marketing";
    }
    setCookie("cookieConsent", cookieValue.trim(), 365);

    // Hide the cookie message
    document.querySelector(".cookies").style.display = "none";

    // Load scripts based on user selection
    loadScripts();
  });

// Function to load scripts based on user selection
function loadScripts() {
  var cookieConsent = getCookie("cookieConsent");
  var functioneelCheckbox = document.getElementById("functioneel");
  var analyticsCheckbox = document.getElementById("analytisch");
  var marketingCheckbox = document.getElementById("marketing");

  // Load Functioneel script always
  // Add your Functioneel script loading code here
  console.log("Functioneel script loaded");

  // Load Google Tag Manager script if Analytics checkbox is checked
  if (analyticsCheckbox.checked && cookieConsent.includes("Analytisch")) {
    console.log("Analytics script loaded");
  }

  // Load marketing automation script if Marketing checkbox is checked
  if (marketingCheckbox.checked && cookieConsent.includes("Marketing")) {
    console.log("Marketing script loaded");
  }
}

// Helper function to get the value of a cookie
function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

// Helper function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const headerLogo = document.querySelector(".header__logo");
const header = document.querySelector(".header");

headerLogo.addEventListener("click", () => {
  if (header.classList.contains("_header-scroll")) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

//========================================================================================================================================================

if (window.innerWidth > 991.98) {
  // Function to move pillar-content__inhoud to pillar-content__steps-right
  function moveContentToRight() {
    var contentWrap = document.querySelector(".pillar-content__inhoud-wrap");
    var content = document.querySelector(".pillar-content__inhoud");
    var stepsRight = document.querySelector(".pillar-content__steps-right");

    stepsRight.appendChild(content);
  }

  // Function to move pillar-content__inhoud back to pillar-content__inhoud-wrap
  function moveContentToWrap() {
    var contentWrap = document.querySelector(".pillar-content__inhoud-wrap");
    var content = document.querySelector(".pillar-content__inhoud");

    contentWrap.appendChild(content);
  }

  // Intersection Observer callback function
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        moveContentToWrap();
      } else {
        moveContentToRight();
      }
    });
  }

  // Get all the relevant elements
  const sections = document.querySelectorAll(".pillar-content__steps-item");
  const links = document.querySelectorAll(".pillar-content__inhoud-box li a");

  // Create options for the Intersection Observer
  const options = {
    rootMargin: "-20% 0px -80% 0px", // Adjust the rootMargin as needed
  };

  // Create a callback function for the Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Get the target element and its corresponding link
      const target = entry.target;
      const targetLink = document.querySelector(
        `.pillar-content__inhoud-box li a[href="#${target.id}"]`
      );

      if (entry.isIntersecting) {
        // Add the "active" class to the link
        targetLink.classList.add("active");
      } else {
        // Remove the "active" class from the link
        targetLink.classList.remove("active");
      }
    });
  };

  // Create a new Intersection Observer instance for highlighting links
  const linkObserver = new IntersectionObserver(callback, options);

  // Observe each section only if the elements exist
  if (sections.length > 0 && links.length > 0) {
    if (window.innerWidth > 991.98) {
      sections.forEach((section) => {
        linkObserver.observe(section);
      });
    }

    // Create an intersection observer instance for moving content
    var contentObserver = new IntersectionObserver(handleIntersection);

    // Target the pillar-content__inhoud-wrap element
    var contentWrap = document.querySelector(".pillar-content__inhoud-wrap");

    // Start observing the visibility changes of contentWrap
    contentObserver.observe(contentWrap);
  }
}

/* function updateSVGSize() {
  const svgElement = document.getElementById("growing-svg");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const svgTop = svgElement.getBoundingClientRect().top;

  // Calculate the maximum size (400px) and the starting size (50px)
  const maxSize = 470;
  const minSize = 20;

  // Calculate the new size based on the scroll position
  const newSize = Math.min(
    maxSize,
    minSize +
      ((scrollPosition + windowHeight / 2 - svgTop) / windowHeight) *
        (maxSize - minSize)
  );

  // Update the SVG size
  svgElement.style.height = newSize + "px";
}

// Attach the updateSVGSize function to the scroll event
window.addEventListener("scroll", updateSVGSize);

// Call the function once on page load to set the initial size
updateSVGSize();
 */

function initAOS() {
  var offsetValue = window.innerWidth < 768 ? 100 : 200;
  AOS.init({
    offset: offsetValue,
    once: true,
    delay: 200,
    duration: 600,
  });
}

// Call the function initially to set the correct offset value
initAOS();

// Update AOS initialization whenever the window is resized
window.addEventListener("resize", initAOS);

/* document.addEventListener("DOMContentLoaded", function () {
  const mainCircle = document.querySelector(".integrale-steps__main-circle");
  const img1 = document.querySelector(".integrale-steps__main-circle-img1");
  const img2 = document.querySelector(".integrale-steps__main-circle-img2");
  const img3 = document.querySelector(".integrale-steps__main-circle-img3");

  const startImg1 = { x: 0, y: 0 };
  const startImg2 = { x: 0, y: -55 };
  const startImg3 = { x: 0, y: 0 };

  const endImg1 = { x: 60, y: 87 };
  const endImg2 = { x: -88, y: -53 };
  const endImg3 = { x: 55, y: -87 };

  let hasReachedTop = false;
  let hasTransformReachedEnd = false;
  let hasReachedBottom = false;

  window.addEventListener("scroll", function () {
    const stepsSection = document.getElementById("integrale-steps-section");
    const elemTop = stepsSection.getBoundingClientRect().top;
    const isVisible = elemTop <= 0;

    if (isVisible && !hasReachedTop) {
      hasReachedTop = true;
    }

    if (hasReachedTop && isVisible && !hasTransformReachedEnd) {
      const scrollPercentage = Math.min(1, -elemTop / window.innerHeight);

      const img1X = lerp(startImg1.x, endImg1.x, scrollPercentage);
      const img1Y = lerp(startImg1.y, endImg1.y, scrollPercentage);
      img1.style.transform = `translate(${img1X}%, ${img1Y}%)`;

      const img2X = lerp(startImg2.x, endImg2.x, scrollPercentage);
      const img2Y = lerp(startImg2.y, endImg2.y, scrollPercentage);
      img2.style.transform = `translate(${img2X}%, ${img2Y}%)`;

      const img3X = lerp(startImg3.x, endImg3.x, scrollPercentage);
      const img3Y = lerp(startImg3.y, endImg3.y, scrollPercentage);
      img3.style.transform = `translate(${img3X}%, ${img3Y}%)`;

      // Check if it's time to hide the main-circle element
      if (scrollPercentage >= 1) {
        hasTransformReachedEnd = true;
      }
      if (hasTransformReachedEnd && !isVisible && !hasReachedBottom) {
        // Reversing the transform back to the start
        const scrollPercentage = Math.max(0, -elemTop / window.innerHeight);

        const img1X = lerp(endImg1.x, startImg1.x, scrollPercentage);
        const img1Y = lerp(endImg1.y, startImg1.y, scrollPercentage);
        img1.style.transform = `translate(${img1X}%, ${img1Y}%)`;

        const img2X = lerp(endImg2.x, startImg2.x, scrollPercentage);
        const img2Y = lerp(endImg2.y, startImg2.y, scrollPercentage);
        img2.style.transform = `translate(${img2X}%, ${img2Y}%)`;

        const img3X = lerp(endImg3.x, startImg3.x, scrollPercentage);
        const img3Y = lerp(endImg3.y, startImg3.y, scrollPercentage);
        img3.style.transform = `translate(${img3X}%, ${img3Y}%)`;

        // Check if it's time to reset the state to the initial state
        if (scrollPercentage <= 0) {
          hasReachedBottom = true;
        }
      }
    }

    if (hasTransformReachedEnd && !isVisible) {
      // Reset the state when the user scrolls back up
      hasReachedTop = false;
      hasTransformReachedEnd = false;
    }
    if (hasTransformReachedEnd && isVisible) {
      // Reset the state when the user scrolls back up
      hasReachedTop = false;
      hasTransformReachedEnd = false;
      hasReachedBottom = false;
    }
  });

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
});
 */

/* document.addEventListener("DOMContentLoaded", function () {
  const mainCircleImages = document.querySelector(
    ".integrale-steps__main-circle-images"
  );
  const mainCircle = document.querySelector(".integrale-steps__main-circle");
  const stepsSection = document.getElementById("integrale-steps-section");
  const itemFirst = document.getElementById("integrale-steps__item-first");

  // Initial dimensions
  const initialWidth = 820;
  const initialHeight = 820;
  const finalWidth = 440;
  const finalHeight = 440;

  let isDelayInProgress = false; // Variable to track delay progress

  // Calculate the distance between the top of the section and the top of the viewport
  function getDistanceFromTop() {
    const rect = stepsSection.getBoundingClientRect();
    return rect.top;
  }

  // Update the dimensions of the main circle images
  function updateMainCircleDimensions() {
    const distanceFromTop = getDistanceFromTop();
    let newWidth, newHeight;

    if (distanceFromTop <= 0) {
      const progress = Math.min(
        1,
        Math.abs(distanceFromTop) / (stepsSection.offsetHeight * 0.6)
      );
      newWidth = initialWidth - (initialWidth - finalWidth) * progress;
      newHeight = initialHeight - (initialHeight - finalHeight) * progress;

      mainCircleImages.style.width = newWidth + "px";
      mainCircleImages.style.height = newHeight + "px";

      if (newWidth <= finalWidth && newHeight <= finalHeight) {
        // If the dimensions have reached the final values and delay is not already in progress
        if (!isDelayInProgress) {
          isDelayInProgress = true;
          itemFirst.style.display = "flex";
          setTimeout(() => {
            mainCircle.style.display = "none";
            itemFirst.style.opacity = "1";
          }, 1000); // 2 seconds delay
        }
      } else {
        mainCircle.style.display = "block";
        itemFirst.style.opacity = "0";
        itemFirst.style.display = "none";
        isDelayInProgress = false; // Reset the delay progress when not at final values
      }
    } else {
      mainCircleImages.style.width = initialWidth + "px";
      mainCircleImages.style.height = initialHeight + "px";

      mainCircle.style.display = "block";
      itemFirst.style.opacity = "0";
      isDelayInProgress = false; // Reset the delay progress when scrolling back to the top
    }
  }

  // Call the function on initial load
  updateMainCircleDimensions();

  // Attach scroll event listener
  window.addEventListener("scroll", updateMainCircleDimensions);
});
 */

const mainCircleImages = document.querySelector(
  ".integrale-steps__main-circle-images"
);
const mainCircle = document.querySelector(".integrale-steps__main-circle");
const stepsSection = document.querySelector(".integrale-steps");

if (stepsSection) {
  // Initial dimensions
  const initialWidth = 820;
  const initialHeight = 820;
  const finalWidth = 440;
  const finalHeight = 440;

  // Calculate the distance between the top of the section and the top of the viewport
  function getDistanceFromTop() {
    const rect = stepsSection.getBoundingClientRect();
    return rect.top;
  }

  // Update the dimensions of the main circle images
  function updateMainCircleDimensions() {
    const distanceFromTop = getDistanceFromTop();
    let newWidth, newHeight;

    if (distanceFromTop <= 0) {
      const progress = Math.min(
        1,
        Math.abs(distanceFromTop) / (stepsSection.offsetHeight * 0.4)
      );
      newWidth = initialWidth - (initialWidth - finalWidth) * progress;
      newHeight = initialHeight - (initialHeight - finalHeight) * progress;

      mainCircleImages.style.width = newWidth + "px";
      mainCircleImages.style.height = newHeight + "px";

      if (newWidth <= finalWidth && newHeight <= finalHeight) {
        mainCircle.style.display = "none";
        // Show the integrale-steps__slide elements when the main circle disappears
        document.querySelector(".integrale-steps__slider").style.opacity = 1;
      } else {
        mainCircle.style.display = "flex";
        document.querySelector(".integrale-steps__slider").style.opacity = 0;
      }
    } else {
      mainCircleImages.style.width = initialWidth + "px";
      mainCircleImages.style.height = initialHeight + "px";

      mainCircle.style.display = "flex";
      // Hide the integrale-steps__slider when the main circle is visible
      document.querySelector(".integrale-steps__slider").style.opacity = 0;
    }
  }

  // Call the function on initial load
  updateMainCircleDimensions();

  // Attach debounced scroll event listener
  let isScrolling = false;
  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
        updateMainCircleDimensions();
        isScrolling = false;
      });
    }
    isScrolling = true;
  });
}
