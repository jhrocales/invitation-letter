// Get elements
const button = document.getElementById("button");
const letter = document.getElementById("letter");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

// Show the letter on button click
button.addEventListener("click", () => {
  letter.style.display = "block";
  overlay.style.display = "block";
});

// Hide the letter on close button click
closeButton.addEventListener("click", () => {
  letter.style.display = "none";
  overlay.style.display = "none";
});
