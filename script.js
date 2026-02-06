// Görgetésnél az aktív menüpont kiemelése
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.style.color = 'var(--text-muted)'; // Alapállapot
        a.style.transform = 'scale(1)';
        if (a.getAttribute('href').includes(current)) {
            a.style.color = 'var(--primary)'; // Aktív szín
            a.style.transform = 'scale(1.2)';
        }
    });

    // Scroll top gomb
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll Top funkció
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/* --- SCROLL ANIMÁCIÓ OBSERVER --- */

// Mely elemeket akarjuk animálni? (Itt soroljuk fel őket)
const revealElements = document.querySelectorAll('.section-title, .about-card, .grid-item, .timeline-item, .skill-card, .hero-text, .hero-image');

// Beállítjuk a figyelőt
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Ha az elem láthatóvá válik (legalább 15%-ban)
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Hozzáadjuk az 'active' osztályt -> elindul az animáció
            observer.unobserve(entry.target); // Többet nem figyeljük, egyszer elég animálni
        }
    });
}, {
    threshold: 0.15 // Akkor sül el, ha az elem 15%-a már látszik
});

// Minden elemre rátesszük az alap 'reveal' osztályt és elindítjuk a figyelést
revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onload = function() {
    window.scrollTo(0, 0);
};