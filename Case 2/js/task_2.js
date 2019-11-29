'use strict'

window.onload = function () {
    let textHead = document.querySelectorAll(".text-block__header");
    let text = document.querySelectorAll("p");

    console.log(textHead);
    console.log(text);

    for (let i = 0; i < textHead.length; i++) {
        textHead[i].addEventListener("click", function(){
            text[i].classList.toggle('hide');
            text[i].classList.toggle('unhide');
            console.log(text[i].className);
        });
    }
}