const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    currentSlide = index;
}

// Previous and Next buttons functionality
document.querySelector('#prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});

document.querySelector('#next').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
});

// Initial slide
showSlide(0);


function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}