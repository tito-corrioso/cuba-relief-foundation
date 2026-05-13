// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
//document.querySelector('.contact-form').addEventListener('submit', function(e) {
    //e.preventDefault();
    //alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto. / Thank you for your message! We will contact you soon.');
    //this.reset();
//});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate stats on scroll
const animateOnScroll = () => {
    const stats = document.querySelectorAll('.stat h4');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Simple animation effect
                entry.target.style.transform = 'scale(1.1)';
                entry.target.style.transition = 'transform 0.3s';
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
};

window.addEventListener('load', animateOnScroll);
