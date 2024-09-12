const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.getElementById("year").textContent = new Date().getFullYear();
