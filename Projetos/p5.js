var slide = document.querySelector('.slideshow'); // Corrigido para "slideshow"
var images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
];

var time = 2000;
var count = 0;

function moveSlideshow() {
    slide.src = images[count];

    if(count < images.length - 1) {
        count++;
    } else {
        count = 0;
    }

    setTimeout(moveSlideshow, time); // Corrigido para "moveSlideshow"
}

window.onload = moveSlideshow;