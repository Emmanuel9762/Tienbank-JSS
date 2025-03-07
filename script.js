document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    // Mobile menu toggle
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.textContent = hamburger.textContent === '☰' ? '×' : '☰';
        body.classList.toggle('no-scroll');
    });

    // Close menu when clicking overlay or outside
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.textContent = '☰';
        body.classList.remove('no-scroll');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.textContent = '☰';
            body.classList.remove('no-scroll');
        });
    });
});