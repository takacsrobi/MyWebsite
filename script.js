/* =========================================
   1. MINDIG AZ OLDAL TETEJÉN KEZDÜNK
   (Javítja a mobilos beragadást F5 után)
   ========================================= */

// Azonnal letiltjuk a böngésző automatikus görgetés-visszaállítását
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Segédfüggvény: Kényszerített ugrás a 0,0 koordinátára
function resetScroll() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox
}

// Ha van hash (#work, #skills) az URL végén, kiszedjük és ugrunk
if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    resetScroll();
}

// Betöltéskor több lépcsőben biztosítjuk, hogy fent legyünk
window.addEventListener('load', () => {
    resetScroll();
    setTimeout(resetScroll, 20);  // Késleltetés mobilokra
    setTimeout(resetScroll, 100); // Biztonsági tartalék
});

// Oldal elhagyásakor is resetelünk
window.addEventListener('beforeunload', resetScroll);


/* =========================================
   2. NAVIGÁCIÓ ÉS SCROLL GOMB KEZELÉSE
   ========================================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    // A) Aktív menüpont kijelölése görgetésnél
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Ha a szekció 1/3-ához értünk, aktívnak jelöljük
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.style.color = 'var(--text-muted)'; // Inaktív szín
        a.style.transform = 'scale(1)';
        
        // Ha egyezik az ID, akkor színezzük
        if (a.getAttribute('href').includes(current)) {
            a.style.color = 'var(--primary)'; // Aktív szín
            a.style.transform = 'scale(1.2)';
        }
    });

    // B) Scroll Top Gomb megjelenítése/elrejtése
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// C) Scroll Top Gomb kattintás esemény (Sima görgetés fel)
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* =========================================
   3. SCROLL REVEAL ANIMÁCIÓ (BEÚSZÁS)
   ========================================= */

// Mely elemeket akarjuk animálni?
const revealElements = document.querySelectorAll(
    '.section-title, .about-card, .grid-item, .timeline-item, .skill-card, .hero-text, .hero-image'
);

// Figyelő beállítása (Intersection Observer)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Ha az elem láthatóvá válik (legalább 15%-ban)
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // CSS animáció indítása
            observer.unobserve(entry.target); // Többet nem figyeljük
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
