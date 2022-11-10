function openModal() {
  document.getElementById("myModal").style.display = "flex";
  
  pageSection.classList.toggle("blurPage");
  const bookingButtonContainer = document.querySelector(".bookingButton")
  bookingButtonContainer.classList.toggle("hideElement")
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  const pageSection = document.querySelector(".pageSection");
  pageSection.classList.toggle("blurPage");
  const bookingButtonContainer = document.querySelector(".bookingButton")
  bookingButtonContainer.classList.toggle("hideElement")
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
 
}