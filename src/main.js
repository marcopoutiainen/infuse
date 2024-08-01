import "./styles/main.scss";

let currentIndex = 0;
const items = document.querySelectorAll(".goals-section-item");
const totalItems = items.length;
const burgerMenu = document.querySelector("#burger-menu");

document.querySelector(".goals-section-buttons-left").addEventListener("click", () => {
  moveSlide(-1);
});

document.querySelector(".goals-section-buttons-right").addEventListener("click", () => {
  moveSlide(1);
});

burgerMenu.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

document.querySelector(".nav-bg").addEventListener("click", () => {
  document.querySelector(".nav").classList.remove("active");
});

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;

  // Remove active class from all items
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0); // Initial display
});
