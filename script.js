// Efecto de sombra en el navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "var(--white)";
    }
});