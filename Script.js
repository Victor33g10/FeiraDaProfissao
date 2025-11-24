// Variáveis do Carrossel
const track = document.getElementById('track');
const slides = track.querySelectorAll('img');
let currentSlideIndex = 0; // Começa na primeira imagem
const totalSlides = slides.length;

// Função principal para mover o carrossel
function moveSlide(direction) {
    // 1. Atualiza o índice do slide
    currentSlideIndex += direction;

    // 2. Garante que o índice não saia dos limites
    if (currentSlideIndex < 0) {
        // Se estiver na primeira, volta para a última
        currentSlideIndex = totalSlides - 1;
    } else if (currentSlideIndex >= totalSlides) {
        // Se estiver na última, volta para a primeira
        currentSlideIndex = 0;
    }

    // 3. Calcula a distância de deslocamento (em porcentagem)
    // - O valor é negativo porque queremos mover o track para a esquerda
    // - Exemplo: Se estiver no slide 1 (currentSlideIndex = 1), o deslocamento será -100%
    const offset = -currentSlideIndex * 100;

    // 4. Aplica a transformação CSS para mover o track
    track.style.transform = `translateX(${offset}%)`;
}

// Opcional: Chama moveSlide(0) no carregamento para garantir que o estado inicial esteja correto.
// Não é estritamente necessário se o CSS estiver certo, mas é uma boa prática.
// window.onload = () => moveSlide(0);