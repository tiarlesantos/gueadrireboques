// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reboque, .informacoes, .whatsapp, .mapa-container, footer, .hero-features li')
  .forEach(el => observer.observe(el));