document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });

    // Initialize the carousel
    var carousel = new bootstrap.Carousel(document.querySelector('#hero-carousel'), {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });
});
