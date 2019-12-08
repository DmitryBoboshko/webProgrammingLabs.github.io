'use strict'

let textarea = document.getElementById("textarea");
let upperReg = /[A-Z]/

textarea.onkeyup = function () {
    if (upperReg.test(this.value)) {
        console.log("Wow, the string holds a character(s) in upper case!");
        alert("Вы ввели запрещённый символ!");
        this.value = this.value.replace(upperReg, "");
    }
}