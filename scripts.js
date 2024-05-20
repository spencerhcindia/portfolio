// scripts.js
document.getElementById('nav-toggle').addEventListener('click', function () {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Hide the menu after clicking a link in mobile view
        const navMenu = document.querySelector('nav ul');
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
        }
    });
});
