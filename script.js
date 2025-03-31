
// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Animation on scroll
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('fadeInLeft')) {
                entry.target.style.animation = 'fadeInLeft 1s ease forwards';
            } else if (entry.target.classList.contains('fadeInRight')) {
                entry.target.style.animation = 'fadeInRight 1s ease forwards';
            } else {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(element => {
    observer.observe(element);
});
