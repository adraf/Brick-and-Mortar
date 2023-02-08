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

// js confirm box for customer's emailing.
// function emailCheck() {
//   if (confirm("If you would like to email us with any questions, please continue by clicking OK.\n\nIf you are looking to request a booking please select Cancel and use the Resurva boking form.\n\nThanks")) {
//     window.open('mailto:brickandmortarexeter@gmail.com?subject=Website%20Enquiry', '_blank');
//   } else {
//     window.open('https://brickmortar.resurva.com/book', '_blank');
//   }
// }

// personalised confirm box for email
function showConfirmBox() {
  document.getElementById("overlay").hidden = false;
}
function closeConfirmBox() {
  document.getElementById("overlay").hidden = true;
}

function isConfirm(answer) {
  if (answer) {
  // answer true
    window.open('mailto:brickandmortarexeter@gmail.com?subject=Website%20Enquiry', '_blank');
  } else {
  // answer false
    window.open('https://brickmortar.resurva.com/book', '_blank');
  }
  closeConfirmBox();
}