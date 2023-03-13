const toggleButton = document.querySelector(".navbar-burger");
const navLinks = document.querySelector(".menu-mobile");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});