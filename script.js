// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.procedure-column, .contact-block, .icon-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});
