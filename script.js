const nameElement = document.getElementById("animated-name");
const subtitleElement = document.getElementById("subtitle");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
const nameText = "TULIO SANTIAGO MENDOZA MORA";

function animateLetters() {
    nameElement.innerHTML = ''; // Limpia el contenido del H1
    for (let i = 0; i < nameText.length; i++) {
        const span = document.createElement('span');
        span.textContent = nameText[i]; // Coloca la letra o espacio
        nameElement.appendChild(span);
        
        // Aplica la animación a cada letra con un pequeño retraso
        setTimeout(() => {
            span.style.animation = 'fadeInLetterWithColor 1s ease forwards';
        }, i * 100); // Retraso de 100ms entre letras
    }

    // Mostrar el subtítulo y las flechas después de la animación del nombre
    setTimeout(() => {
        subtitleElement.classList.remove("hidden");
        subtitleElement.style.opacity = 1; // Hacer visible el subtítulo

        upArrow.classList.remove("hidden");
        downArrow.classList.remove("hidden");
    }, nameText.length * 100 + 500); // Aparece después de la animación de todas las letras
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollHorizontally(direction) {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollAmount = scrollContainer.clientWidth * direction;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

window.onload = animateLetters;
