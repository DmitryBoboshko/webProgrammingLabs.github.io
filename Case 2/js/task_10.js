'use strict'

let slider = document.querySelector('.slider');
let runner = document.querySelector('.runner');


let moveDistance = 100;
console.log(slider.style.width);
runner.style.left = 0 + 'px';

document.onkeydown = function (event) {
    if (event.key == "ArrowRight") {
        runner.style.left = parseInt(runner.style.left, 10) + moveDistance + 'px';
        //console.log(runner.style.left);
        if (parseInt(runner.style.left) > moveDistance * 9) {
            runner.style.left = 0 + 'px';
        }
    }

    if (event.key == "ArrowLeft") {
        runner.style.left = parseInt(runner.style.left, 10) - moveDistance + 'px';
        if (parseInt(runner.style.left) < 0) {
            runner.style.left = moveDistance * 9 + 'px';
        }
    }
}