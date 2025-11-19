// Fade-in effect on scroll
const elements = document.querySelectorAll(".fade");

function fadeInOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();
