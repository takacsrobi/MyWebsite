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

// Skill kiemelés hoverkor
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.querySelector('.progress-bar').style.background = '#4682b4';
    });
    skill.addEventListener('mouseout', () => {
        skill.querySelector('.progress-bar').style.background = 'linear-gradient(to right, #1e90ff, #4682b4)';
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