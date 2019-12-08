'use strict'

let menu = document.getElementById('menu');
let title = menu.querySelector('.title')

title.onclick = function () {
    menu.classList.toggle('open');
}