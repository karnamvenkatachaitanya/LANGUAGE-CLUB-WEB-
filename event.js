
"use strict";
// script.js (unchanged from original for Version 1)

const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
const navBtns = document.querySelectorAll('.nav-btn');
let currentSlide = 0;
let slideInterval = setInterval(() => nextSlide(), 7000);

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  contents[currentSlide].classList.remove('active');
  navBtns[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  contents[currentSlide].classList.add('active');
  navBtns[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Pause slider on hover
const slider = document.querySelector('.home');
slider.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});
slider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => nextSlide(), 7000);
});

// Back to Top functionality
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
