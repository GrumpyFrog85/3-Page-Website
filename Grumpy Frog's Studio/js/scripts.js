const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.getElementById("hamburger-icon").addEventListener("click", function() {
    var nav = document.getElementById("mobile-links");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
