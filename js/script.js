const navbarNav = document.querySelector(".navbar-nav");
const nav = document.querySelector("#menu");

nav.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
document
  .getElementById("contact-page")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
  });
