
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-links");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});


// Prevent hamburger menu from triggering when clicking social icons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".top-bar .social a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
});
