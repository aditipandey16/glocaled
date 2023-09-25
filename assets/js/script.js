'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}

document.getElementById("contactBtn").addEventListener("click", function (event) {
  event.stopPropagation();
  var popup = document.getElementById("contactPopup");
  popup.style.display = "block";
});

// Add an event listener to close the popup when clicking anywhere outside of it
document.addEventListener("click", function (event) {
  var popup = document.getElementById("contactPopup");
  if (popup.style.display === "block" && event.target !== document.getElementById("contactBtn")) {
    popup.style.display = "none";
  }
});

document.getElementById('toggle-UK').addEventListener('click', function (e) {
  e.preventDefault();
  toggleDropdown('dropdown-UK');
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const dropdownContent = dropdown.querySelector('.custom-dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function selectCourse(country, course) {
  // Handle the selected course for the given country
  console.log(`User selected course "${course}" for ${country}`);

  // Close the dropdown
  const dropdownContent = document.querySelector(`#${country} .custom-dropdown-content`);
  dropdownContent.style.display = 'none';
}

// Close the dropdowns when clicking outside of them
window.onclick = function (event) {
  if (!event.target.matches('.custom-dropdown')) {
    const dropdownContents = document.querySelectorAll('.custom-dropdown-content');
    for (const dropdownContent of dropdownContents) {
      dropdownContent.style.display = 'none';
    }
  }
};



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}