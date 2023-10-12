const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  initialSlide: 1,
  pagination: {
    el: ".custom-pagination",
    // clickable: true,
    type: "custom",
  },
  spaceBetween: 50,
});

// Get all custom bullets
const customBullets = document.querySelectorAll(".custom-bullet");

// Function to set the active state for the first bullet
function setActiveStateForFirstBullet() {
  customBullets.forEach((b) => {
    b.style.opacity = 0.5; // Set the default opacity for inactive bullets
  });
  customBullets[1].style.opacity = 1; // Set full opacity for the first bullet
}
// Set active state for the first bullet on page load
setActiveStateForFirstBullet();

// Add a click event listener to each custom bullet
customBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    // Use the Swiper API to go to the corresponding slide
    swiper.slideTo(index);

    // Adjust the opacity for the clicked bullet
    customBullets.forEach((b) => {
      b.style.opacity = 0.5; // Set the default opacity for inactive bullets
    });
    bullet.style.opacity = 1; // Set full opacity for the clicked bullet
  });
});
