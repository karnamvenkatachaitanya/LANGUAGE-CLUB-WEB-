// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* Slider Logic */
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slideshow-controls');
const slideshowWrapper = document.querySelector('.slideshow-wrapper');
let currentIndex = 0;
let autoSlideInterval;

// Create dots for each slide
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('control-dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

// Show first slide by default
slides[currentIndex].classList.add('active');

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  dotsContainer.children[currentIndex].classList.remove('active');
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  dotsContainer.children[currentIndex].classList.add('active');
  resetAutoSlide();
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}
function prevSlide() {
  goToSlide(currentIndex - 1);
}
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
slideshowWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slideshowWrapper.addEventListener('mouseleave', startAutoSlide);
startAutoSlide();

// Back-to-Top Smooth Scroll
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});