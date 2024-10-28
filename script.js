const nameElement = document.getElementById("animated-name");
const subtitleElement = document.getElementById("subtitle");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
const nameText = "TULIO SANTIAGO MENDOZA MORA";

// Función para animar las letras del nombre
function animateLetters() {
    nameElement.innerHTML = ''; // Limpia el contenido del H1
    for (let i = 0; i < nameText.length; i++) {
        const span = document.createElement('span');
        span.textContent = nameText[i];
        nameElement.appendChild(span);
        
        // Aplica la animación a cada letra con un pequeño retraso
        setTimeout(() => {
            span.style.animation = 'fadeInLetterWithColor 1s ease forwards';
        }, i * 100);
    }

    setTimeout(() => {
        subtitleElement.classList.remove("hidden");
        subtitleElement.style.opacity = 1;

        upArrow.classList.remove("hidden");
        downArrow.classList.remove("hidden");
    }, nameText.length * 100 + 500);
}

// Función para desplazarse suavemente hacia la sección especificada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Función para desplazamiento horizontal
function scrollHorizontally(direction) {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollAmount = scrollContainer.clientWidth * direction;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Efectos de zoom en las secciones al pasar el mouse
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.02)'; // Efecto de zoom
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)'; // Regresa al tamaño original
    });
});

// Manejar el clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const targetId = link.getAttribute('href').substring(1); // Obtener el ID de la sección
        scrollToSection(targetId); // Desplazar suavemente hacia la sección
    });
});

// Ejecutar la animación al cargar la página
window.onload = animateLetters;
