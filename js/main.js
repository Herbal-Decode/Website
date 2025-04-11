// Mobile navigation toggle and dynamic year
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

document.getElementById('year').textContent = new Date().getFullYear();