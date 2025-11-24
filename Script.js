let index = 0;
const track = document.getElementById("track");
const totalSlides = track.children.length;

function showSlide(i) {
    index += i;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    track.style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(i) {
    showSlide(i);
}

// Carrossel automático a cada 4s
setInterval(() => {
    showSlide(1);
}, 4000);
