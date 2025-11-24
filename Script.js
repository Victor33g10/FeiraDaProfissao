// Localiza os elementos do carrossel no HTML
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');

// Verifica se os elementos existem antes de executar
if (track && images.length > 0) {
    let currentSlide = 0;
    const totalSlides = images.length;
    const slideWidth = 100 / totalSlides; // 20% para 5 imagens

    // --- FUNÇÃO PRINCIPAL DE MOVIMENTO ---
    function moveTrack() {
        // Calcula o quanto o trilho deve ser movido para exibir o slide atual
        const offset = -currentSlide * slideWidth;
        track.style.transform = `translateX(${offset}%)`;
    }

    // --- NAVEGAÇÃO MANUAL (pelos botões) ---
    window.nextSlide = function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveTrack();
    }

    window.prevSlide = function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        moveTrack();
    }

    // --- SLIDE AUTOMÁTICO (RODAR) ---
    // A cada 4000 milissegundos (4 segundos), chame a função nextSlide
    setInterval(window.nextSlide, 4000); 
}