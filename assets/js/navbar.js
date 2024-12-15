// Get the elements
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Close navbar when clicking on a menu item
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

// Close navbar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }
});
