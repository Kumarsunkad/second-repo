// Carousel functionality
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Event Listeners
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

// Auto-slide
setInterval(nextSlide, 3000);
