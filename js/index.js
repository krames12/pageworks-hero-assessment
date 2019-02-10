let menu = document.querySelector("#menu-list");
let menuToggle = document.querySelector("#nav-toggle");

menuToggle.addEventListener("click", event => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
