
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const path = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
