const toggleButton = document.querySelector(".navbar-burger");
const navLinks = document.querySelector("#menuMobile");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});