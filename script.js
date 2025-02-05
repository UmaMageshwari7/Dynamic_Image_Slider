let currentIndex = 0;
const slides = document.querySelectorAll(".images input");
const slideCount = slides.length;
let autoSlideInterval;

// Function to show the slide based on index
function showSlide(index) {
    slides[index].checked = true;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
}

// Auto-slide functionality
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

// Start auto-slide on page load
autoSlide();

// Pause auto-slide on manual navigation
document.querySelector(".slider").addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});
document.querySelector(".slider").addEventListener("mouseleave", autoSlide);
