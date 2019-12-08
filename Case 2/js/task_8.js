'use strict'

document.querySelector('.next').onclick = sliderNext;
document.querySelector('.prev').onclick = sliderPrev;

let carouselUl = document.getElementById('movableUl');
let picWidth = 1070;
let picNumber = 3;
let left = 0;

function sliderNext() {
    if (left > -picWidth * (picNumber - 1)) {
        left -= picWidth;
    } else {
        left = 0
    }
    carouselUl.style.left = left + 'px';
    //console.log(carouselUl.style.left);
}

function sliderPrev() {
    if (left >= 0) {
        left = -picWidth * (picNumber - 1);
    } else {
        left += picWidth;
    }

    carouselUl.style.left = left + 'px';
    //console.log(carouselUl.style.left);
}