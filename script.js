const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const mode = document.querySelector('.mode');

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
    menu.classList.toggle('nomenu');
    icon.classList.toggle('open');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains("dark-mode")){
      mode.innerHTML = "🌙"
    }
    else{
      mode.innerHTML = "🔆"

    }
}