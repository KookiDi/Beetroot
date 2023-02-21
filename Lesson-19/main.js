const hamburger = document.querySelector(".header-holder__hamburger");
const navMenu = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}