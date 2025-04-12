// Find every slideshow on the page
document.querySelectorAll('.slideshow-wrapper').forEach(wrapper => {
    const slides        = wrapper.querySelectorAll('.slide');
    const dotsContainer = wrapper.querySelector('.slideshow-controls');
    const nextBtn       = wrapper.querySelector('.next-btn');
    const prevBtn       = wrapper.querySelector('.prev-btn');
    let currentIndex    = 0;
    let autoSlideInterval;
  
    // --- 1) Build the dots for this slider ---
    dotsContainer.innerHTML = ''; // clear any old dots
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('control-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  
    // --- 2) Show the very first slide ---
    slides.forEach((s, i) => s.classList.toggle('active', i === 0));
  
    // --- 3) Navigation functions ---
    function goToSlide(idx) {
      slides[currentIndex].classList.remove('active');
      dotsContainer.children[currentIndex].classList.remove('active');
  
      currentIndex = (idx + slides.length) % slides.length;
  
      slides[currentIndex].classList.add('active');
      dotsContainer.children[currentIndex].classList.add('active');
      resetAutoSlide();
    }
    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }
  
    // --- 4) Auto‑slide timer ---
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 4000);
    }
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }
  
    // --- 5) Hook up the buttons & hover behavior ---
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    wrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    wrapper.addEventListener('mouseleave', startAutoSlide);
  
    // --- 6) Kick it off! ---
    startAutoSlide();
  });
// ---- Back to Top Button ----
const backToTopBtn = document.querySelector('.back-to-top-btn');

// 1) Toggle visibility on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// 2) Smooth scroll to top on click
backToTopBtn.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  