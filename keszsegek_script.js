// Nav gombok hover effektje
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.background = '#1e90ff';
        btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
        btn.style.transform = 'scale(1)';
    });
});

// Buborék lenyitás
document.querySelectorAll('.skill-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        bubble.classList.toggle('active');
    });
});

// Scroll-to-top gomb
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}