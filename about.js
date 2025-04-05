document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        { href: '#Home', text: 'Home' },
        { href: '#About', text: 'About' },
        { href: '#Events', text: 'Events' },
        { href: '#panel', text: 'Panel' },
        { href: '#More', text: 'More' },
    ];

    // Create mobile navigation
    const nav = document.createElement('nav');
    nav.classList.add('mobile-nav');
    Object.assign(nav.style, {
        position: 'fixed',
        top: '0',
        left: '-300px',
        width: '250px',
        height: '100vh',
        backgroundColor: '#252525',
        zIndex: '1000',
        transition: 'left 0.3s ease',
        boxShadow: '2px 0 10px rgba(0,0,0,0.3)',
        padding: '60px 20px 20px'
    });

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '15px',
        right: '15px',
        fontSize: '30px',
        background: 'none',
        border: 'none',
        color: '#c89b3c',
        cursor: 'pointer'
    });
    nav.appendChild(closeBtn);

    // Menu list
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    menuItems.forEach(({ href, text }) => {
        const li = document.createElement('li');
        li.style.margin = '15px 0';

        const a = document.createElement('a');
        a.href = href;
        a.textContent = text;
        Object.assign(a.style, {
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '18px',
            display: 'block',
            padding: '10px 0',
            borderBottom: '1px solid rgba(200, 155, 60, 0.3)',
            transition: 'color 0.3s'
        });

        a.addEventListener('mouseover', () => a.style.color = '#c89b3c');
        a.addEventListener('mouseout', () => a.style.color = '#ffffff');

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.body.appendChild(nav);

    // Overlay for mobile nav
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '999',
        display: 'none',
        transition: 'opacity 0.3s',
        opacity: '0'
    });
    document.body.appendChild(overlay);

    // Toggle button (must exist in HTML)
    const menuToggle = document.getElementById('menu-toggle');

    function openMenu() {
        nav.style.left = '0';
        overlay.style.display = 'block';
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
    }

    function closeMenu() {
        nav.style.left = '-300px';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Responsive nav toggle
    function handleResponsiveNav() {
        const desktopNav = document.querySelector('.desktop-nav');
        if (window.innerWidth <= 768) {
            if (menuToggle) menuToggle.style.display = 'block';
            if (desktopNav) desktopNav.style.display = 'none';
        } else {
            if (menuToggle) menuToggle.style.display = 'none';
            if (desktopNav) desktopNav.style.display = 'flex';
            closeMenu();
        }
    }

    window.addEventListener('resize', handleResponsiveNav);
    handleResponsiveNav();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                closeMenu();
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll reveal animation
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
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
// Responsive behavior
function handleResponsiveElements() {
    const desktopNav = document.querySelector('.desktop-nav');
    const menuToggle = document.getElementById('menu-toggle');

    if (window.innerWidth <= 768) {
        if (menuToggle) menuToggle.style.display = 'block';
        if (desktopNav) desktopNav.style.display = 'none';
    } else {
        if (menuToggle) menuToggle.style.display = 'none';
        if (desktopNav) desktopNav.style.display = 'flex';
        closeMenu(); // Close mobile menu on resize to desktop
    }
}
// Close button (×) inside mobile nav
const closeBtn = document.createElement('button');
closeBtn.innerHTML = '&times;';
Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '30px',
    background: 'none',
    border: 'none',
    color: '#c89b3c',
    cursor: 'pointer'
});
nav.appendChild(closeBtn);

// Event to close the menu
closeBtn.addEventListener('click', closeMenu);
function closeMenu() {
    nav.style.left = '-300px';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}
