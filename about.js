document.addEventListener("DOMContentLoaded", function () {


    document.head.appendChild(style);

    function revealOnScroll() {
        document.querySelectorAll('section').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 150) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Back to top button behavior
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.pageYOffset > 300);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const backToTopLink = document.querySelector('.back-to-top');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

