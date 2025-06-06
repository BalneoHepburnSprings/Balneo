
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-links");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});
