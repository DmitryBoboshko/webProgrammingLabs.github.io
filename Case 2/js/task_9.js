'use strict'

let sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mousedown', e => {
    console.log(e.target);
    console.log(e.target.src);

    document.querySelector('.zoomed-pic').style.display = 'block';
    document.querySelector('.zoomed-pic').style.backgroundImage = 'url(' + e.target.src + ')';
})

document.querySelector('.zoomed-pic').addEventListener('mousedown', e => {
    console.log(e.target);
    document.querySelector('.zoomed-pic').style.display = 'none';
})