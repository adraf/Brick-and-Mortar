// javascript for landing page
// Burger Menu
const navbar = document.querySelector(".navbar")
const burger = document.querySelector(".burger")
const burgerWhite = document.querySelector("#burgerWhite")
const landingPageBackground = document.querySelector(".pageBody")
const heroLogoContainer = document.querySelector(".heroLogoContainer")
const bookingButtonContainer = document.querySelector(".bookingButton")
// const contactPageSection = document.querySelector(".contactPageSection")

burger.addEventListener("click", toggleHamburger)
// toggles nav menu in and out when clicking on the hamburger menu icon
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  burger.classList.toggle("showClose")
  landingPageBackground.classList.toggle("blurBackground")
  heroLogoContainer.classList.toggle("hideElement")
  bookingButtonContainer.classList.toggle("hideElement")
  invertBurger();
}

const menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

// fixes invert of color in burger menu icons
function invertBurger() {
  if (burgerWhite.className === "burger" ) {
    burgerWhite.style.filter = "invert(100)"
    // console.log("burger")
  } else if (burgerWhite.className === "burger showClose") {
    burgerWhite.style.filter = "invert(0)"
    // console.log("show close")
  }
}