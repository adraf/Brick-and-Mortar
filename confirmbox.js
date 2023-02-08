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