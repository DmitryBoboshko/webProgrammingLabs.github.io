'use strict'

let bg = document.getElementById('slides');
let timerId = setTimeout(DragSlider, 40);

let currentPosition = 0;

function DragSlider () {
    bg.style.backgroundPositionX = currentPosition + 'px' ;
    currentPosition += 1;
    timerId = setTimeout(DragSlider, 40);
}