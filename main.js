// javascript for all pages except landing page
// Burger Menu

const navbar = document.querySelector(".navbar")
const burger = document.querySelector(".burger")

// const landingPageBackground = document.querySelector(".pageBody")
const heroLogoContainer = document.querySelector(".heroLogoContainer")
const bookingButtonContainer = document.querySelector(".bookingButton")
const pageSection = document.querySelector(".pageSection")

burger.addEventListener("click", toggleHamburger)
// toggles nav menu in and out when clicking on the hamburger menu icon
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  burger.classList.toggle("showClose")
  // landingPageBackground.classList.toggle("blurBackground")
  heroLogoContainer.classList.toggle("hideElement")
  bookingButtonContainer.classList.toggle("hideElement")
  pageSection.classList.toggle("blurPage")
}

const menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)


