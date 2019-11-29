'use strict'

let colorsList = document.getElementById("colors");

// colorsList.onclick = function (event) {
//     if (event.target.tagName != "LI") return;

//     let target = event.target;
//     console.log(target);
//     console.log(target.style.backgroundColor);
//     let targetColor = target.style.backgroundColor;

//     document.body.style.color = targetColor;
// }

colorsList.addEventListener('mousedown', e => {
    let evt = e.type;
    let ewh = e.which;
    console.log(evt + ewh);

    if (e.target.tagName != "LI") return;

    let target = e.target;
    let targetColor = target.style.backgroundColor;

    if (ewh == 1) {
        document.body.style.color = targetColor;
    } else if (ewh == 3) {
        document.body.style.backgroundColor = targetColor;
    };
});

colorsList.oncontextmenu = function (event) {
    return false;
}