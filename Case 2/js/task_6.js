'use strict'

let container = document.getElementById('container');
let element = document.getElementById('element');

container.onmousemove = function(event) {
    container.style.cursor = 'none';
    element.style.display = 'block';
    element.style.position = 'fixed';
    element.style.left = event.clientX + 'px';
    element.style.top = event.clientY + 'px';
}

container.onmouseout = function(event) {
    element.style.display = 'none';
    element.style.position = 'relative';
    element.style.left = 0;
    element.style.top = 0;
}