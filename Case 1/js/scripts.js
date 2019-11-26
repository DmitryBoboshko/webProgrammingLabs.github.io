"use strict";

function checkInput(value) {
    let parsedValue = parseInt(value);

    while (isNaN(parsedValue)) {
        parsedValue = parseInt(prompt("Введённое значение не является числом! Повторите ввод.", 0));
    }

    return parsedValue;
}

function ex1() {
    // Задание 1
    // Даны стороны прямоугольника a и b.
    // Найти его площадь S = a·b и периметр P = 2·(a + b).
    // alert("Задание 1. Рассчитать площадь и периметр прямоугольника.");

    let a = prompt("Введите значение длины стороны A", 0);
    a = checkInput(a);
    let b = prompt("Введите значение длины стороны B", 0);
    b = checkInput(b);

    let s = a * b;
    let p = 2 * (a + b);

    alert(`Площадь прямоугольника равна ${s}\nПериметр прямоугольника равен ${p}`);
}

function ex2() {
    // Задание 2
    // Даны три целых числа.
    // Найти количество положительных чисел в исходном наборе.
    // alert("Задание 2. Найти количество положительных чисел в исходном наборе.");

    let a = prompt("Введите значение первого числа", 0);
    a = checkInput(a);
    let b = prompt("Введите значение второго числа", 0);
    b = checkInput(b);
    let s = prompt("Введите значение третьего числа", 0);
    s = checkInput(s);

    let arr = [a, b, s];
    let count = 0;

    for (let i = 0; i < 3; i++) {
        if (arr[i] > 0) { count += 1; }
    }

    alert(`Количество положительных чисел в наборе: ${count}`)
}

function ex3() {
    // Задание 3
    // Дано целое число в диапазоне 1–7.
    // Вывести строку — название дня недели,
    // соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.).
    // alert("Задание 3. Вывести день недели, соответствующий числу.");

    let a = prompt("Введите номер дня недели (число от 1 до 7).");
    a = checkInput(a);

    while (a < 1 || a > 7) {
        a = prompt("Введён неправильный номер. Попробуйте ещё раз.");
        a = checkInput(a);
    }

    switch (a) {
        case 1:
            alert(`${a} -  Понедельник`);
            break;
        case 2:
            alert(`${a} -  Вторник`);
            break;
        case 3:
            alert(`${a} -  Среда`);
            break;
        case 4:
            alert(`${a} -  Четверг`);
            break;
        case 5:
            alert(`${a} -  Пятница`);
            break;
        case 6:
            alert(`${a} -  Суббота`);
            break;
        case 7:
            alert(`${a} -  Воскресенье`);
            break;
        default:
            alert("Что-то пошло не так...");
    }
}

function ex4() {
    // Задание 4
    // Даны целые числа K и N (N > 0). Вывести N раз число K.

    // alert("Задание 4.\nДаны целые числа K и N (N > 0).\nВывести N раз число K.");
    let k = prompt("Введите число K.");
    k = checkInput(k);
    let n = prompt("Введите число N (N > 0).");
    n = checkInput(n);

    while (n <= 0) {
        n = prompt("N <= 0. Введите число ещё раз.", 0);
        n = checkInput(n);
    }

    for (let i = 0; i < n; i++) {
        alert(`${i + 1}-ый ${k}`);
    }
}

function ex5() {
    // Задание 5
    // Даны положительные числа A и B (A > B).
    // На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений).
    // Не используя операции умножения и деления, найти длину незанятой части отрезка A.

    // alert("Задание 5.\nДаны положительные числа A и B (A > B).");
    // alert("На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений).");
    // alert("Не используя операции умножения и деления, найти длину незанятой части отрезка A.");

    let a = prompt("Введите число A (A > B)", '');
    checkInput(a);
    let b = prompt("Введите число B (B < A)", '');
    checkInput(b);
    let l;

    while (a < b) {
        a = prompt("A < B. Введите число A (A > B)", '');
        a = checkInput(a);
    }

    for (let i = a; i > b; i -= b) {
        l = i - b;
    }

    alert(`Длина незанятой части отрезка = ${l}`);
}

function ex6_regular() {
    // Задание 6
    // Описать функцию Sign(X) целого типа, возвращающую для числа X следующие значения:
    // −1,    если X < 0;        0,    если X = 0;        1,    если X > 0.
    // С помощью этой функции найти значение выражения Sign(A) + Sign(B) для данных чисел A и B.

    let a = prompt("Введите целое число A", '');
    a = checkInput(a);
    let b = prompt("Введите целое число B", '');
    b = checkInput(b);

    let sum = Sign(a) + Sign(b);

    alert(`${sum}`);

    function Sign(X) {
        let x = Math.round(X);

        if (x < 0) {
            return -1;
        } else if (x == 0) {
            return 0;
        } else if (x > 0) {
            return 1;
        } else {
            alert("Передан неверный тип данных в функцию Sign(X)");
        }
    }
}

function ex6_expression() {
    let a = prompt("Введите целое число A", '');
    a = checkInput(a);
    let b = prompt("Введите целое число B", '');
    b = checkInput(b);

    let Sign = function (X) {
        let x = Math.round(X);

        if (x < 0) {
            return -1;
        } else if (x == 0) {
            return 0;
        } else if (x > 0) {
            return 1;
        } else {
            alert("Передан неверный тип данных в функцию Sign(X)");
        }
    }

    let sum = Sign(a) + Sign(b);

    alert(`${sum}`);
}

function ex6_arrow() {
    let a = prompt("Введите целое число A", '');
    a = checkInput(a);
    let b = prompt("Введите целое число B", '');
    b = checkInput(b);

    let Sign = (X) => {
        let x = Math.round(X);

        if (x < 0) {
            return -1;
        } else if (x == 0) {
            return 0;
        } else if (x > 0) {
            return 1;
        } else {
            alert("Передан неверный тип данных в функцию Sign(X)");
        }
    }

    let sum = Sign(a) + Sign(b);

    alert(`${sum}`);
}

function ex7() {
    // Задание 7
    // Дано целое число N и набор из N чисел. Найти минимальный и максимальный из элементов данного набора и вывести их в указанном порядке.

    let N = prompt("Введите целое число N (N > 0)", 0);
    N = checkInput(N);
    if (N <= 0) {
        N = prompt("Введенное число меньше либо равно 0, повторите ввод.", 0);
        N = checkInput(N);
    }
    N = Math.round(N);

    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(getRandomInt());
    }

    function getRandomInt() {
        let max = 100;
        let min = -100;
        return Math.round(Math.random() * (max - min) + min);
    }

    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);

    alert(`В массиве: ${arr}; минимальный элемент - (${min}), максимальный - (${max})`);
}

function ex8() {
    // let N = prompt("Введите целое число N (N > 1).", 0);
    let N = prompt("Введите целое число N (N > 1)", 0);
    N = checkInput(N);
    if (N <= 1) {
        N = prompt("Введенное число меньше либо равно 1, повторите ввод.", 0);
        N = checkInput(N);
    }
    N = Math.round(N);

    while (N < 1) N = prompt("Введённое значение меньше 1, повторите ввод", 0);
    N = checkInput(N);

    let A = prompt("Введите первый член арифметической прогрессии.", 0);
    A = checkInput(A);
    let D = prompt("Введите разность арифметической прогрессии.", 0);
    D = checkInput(D);

    let arr = [];
    arr[0] = +A;

    for (let i = 1; i < N; i++) {
        arr[i] = A + i * D;
    }

    alert(`Полученный массив: ${arr}`);
}

function ex9() {
    let N = prompt("Введите размер массива N (N > 1).", 0);
    N = checkInput(N);
    while (N < 1) {
        N = prompt("Введённое значение меньше 1, повторите ввод", 0);
        N = checkInput(N);
    }

    let K = prompt("Введите число K (1 <= K <= N).", 0);
    K = checkInput(K);
    while (K < 1) {
        K = prompt("Введённое значение меньше 1, повторите ввод", 0);
        K = checkInput(K);
    }
    while (K > N) {
        K = prompt("Введённое значение больше N, повторите ввод", 0);
        K = checkInput(K);
    }

    let A = [];
    for (let i = 0; i < N; i++) {
        A.push(getRandomInt());
    }

    function getRandomInt() {
        let max = 10;
        let min = -10;
        return Math.round(Math.random() * (max - min) + min);
    }

    alert(`Исходный массив: ${A}`);

    const Ak = A[K - 1];

    for (let i = 0; i < N; i++) {
        A[i] += Ak;
    }

    alert(`Преобразованный массив: ${A}`);
}

function ex10() {
    let string = prompt("Введите строку:", "");
    while (string.length == 0) string = prompt("Введена пустая строка. Повторите ввод.")
    let count = 0;

    for (let lit of string) {
        if (!isNaN(+lit)) { count += 1 };
    }

    alert(`Количество цифр в строке: ${count}`);
}

// let circle = {
//     x: 0,
//     y: 0,
//     r: 0,
//     s: 0,
//     p: 0,
//     // Сокращённое создание метода
//     calcPerimeter: function () {
//         alert(`Длина окружности = ${2 * Math.PI * r}`)
//     },

//     pointInside() {
//         px = prompt("Введите координату x точки:", 0);
//         py = prompt("Введите координату y точки:", 0);

//         if ((Math.pow((px - x), 2) + Math.pow((py - y), 2)) < Math.pow(r, 2)) {
//             alert(`Точка лежит внутри круга.`)
//         } else {
//             alert("Точка находится вне круга")
//         }
//     },
//     // --------------------------
// }

// // Создание метода через использование функционального выражения
// circle.getXCenter = function () {
//     x = prompt("Введите координату x центра окружности:", 0);
// }

// circle.getYCenter = function () {
//     y = prompt("Введите координату y центра окружности:", 0);
// }
// // -------------------------------------------------------------

// // Создание метода через использование функционального выражения
// // и последующего создания нового метода объекта
// function calcArea() {
//     alert(`Площадь окружности = ${Math.PI * Math.pow(r, 2)}`);
// }

// circle.calcArea = calcArea;
// // -------------------------------------------------------------

// let circle = new Object();

// circle.centerX = +0;
// circle.centerY = +0;

// console.log(circle.centerX);
// console.log(circle.centerY);
// console.log(circle);


// function makeCircle(centerX, centerY) {
//     if (centerX == undefined || !isNumber(centerX)) {
//         // console.log(typeof (centerX));
//         // console.log(isNumber(centerX));
//         if (centerY == undefined || !isNumber(centerY)) {
//             return { centerX: 0, centerY: 0 };
//         } else {
//             return { centerX: 0, centerY };
//         }
//     } else {
//         // console.log(isNumber(centerX));
//         if (centerY == undefined || !isNumber(centerY)) {
//             return { centerX, centerY: 0 };
//         } else {
//             return { centerX, centerY };
//         }
//     }
// }

// let circle = makeCircle("q", 3);

// console.log(circle);
// // console.log(circle.centerX);
// console.log(typeof (circle.centerX));
// console.log(typeof (circle.centerY));

// function isNumber(val) {
//     // console.log(parseInt(val, 10));
//     console.log(typeof (parseInt(val, 10)));
//     // let indicator = (typeof(parseInt(val, 10)) == "number") ? true : false;
//     let curVal = parseInt(val, 10);
//     console.log(curVal);
//     let indicator = isNaN(curVal) ? true : false;
//     console.log(indicator);
//     return indicator;
// }

function ex11__object() {
    function Circle() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.s = 0;
        this.p = 0;
        this.setCenterX = function () {
            let temp = prompt("Введите координату X центра:", 0);
            this.x = checkInput(temp);
        };
        this.setCenterY = function () {
            let temp = prompt("Введите координату Y центра:", 0);
            this.y = checkInput(temp);
        };
        this.setRadius = function () {
            let temp = prompt("Введите радиус окружности", 0);
            this.r = checkInput(temp);
        };
        this.calcPerimeter = function () {
            this.p = 2 * Math.PI * this.r;
            alert(`Длина окружности равна: ${this.p}`)
        };
        this.calcSquare = function () {
            this.s = Math.PI * Math.pow(this.r, 2);
            alert(`Площадь окружности равна: ${this.s}`);
        };
        this.pointInside = function () {
            let pointX = prompt("Введите координату X точки:", 0);
            pointX = checkInput(pointX);
            let pointY = prompt("Введите координату Y точки:", 0);
            pointY = checkInput(pointY);

            if ((Math.pow((pointX - this.x), 2) + Math.pow((pointY - this.y), 2)) <= Math.pow(this.r, 2)) {
                alert(`Точка лежит внутри круга.`)
            } else {
                alert("Точка находится вне круга")
            }
        };
    }

    // function checkInput(value) {
    //     let parsedValue = parseInt(value);

    //     while (isNaN(parsedValue)) {
    //         parsedValue = parseInt(prompt("Введённое значение не является числом! Повторите ввод.", 0));
    //     }

    //     return parsedValue;
    // }

    let circle = new Circle();

    circle.setCenterX();
    circle.setCenterY();
    circle.setRadius();
    circle.calcPerimeter();
    circle.calcSquare();
    circle.pointInside();

    console.log(circle);
}

function ex11__class() {
    class Circle {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.r = 0;
            this.s = 0;
            this.p = 0;
        }
        setCenterX() {
            let temp = prompt("Введите координату X центра:", 0);
            this.x = checkInput(temp);
        }
        setCenterY() {
            let temp = prompt("Введите координату Y центра:", 0);
            this.y = checkInput(temp);
        }
        setRadius() {
            let temp = prompt("Введите радиус окружности", 0);
            this.r = checkInput(temp);
        }
        calcPerimeter() {
            this.p = 2 * Math.PI * this.r;
            alert(`Длина окружности равна: ${this.p}`)
        }
        calcSquare() {
            this.s = Math.PI * Math.pow(this.r, 2);
            alert(`Площадь окружности равна: ${this.s}`);
        }
        pointInside() {
            let pointX = prompt("Введите координату X точки:", 0);
            pointX = checkInput(pointX);
            let pointY = prompt("Введите координату Y точки:", 0);
            pointY = checkInput(pointY);

            if ((Math.pow((pointX - this.x), 2) + Math.pow((pointY - this.y), 2)) <= Math.pow(this.r, 2)) {
                alert(`Точка лежит внутри круга.`)
            } else {
                alert("Точка находится вне круга")
            }
        }
    }

    let circle = new Circle();

    circle.setCenterX();
    circle.setCenterY();
    circle.setRadius();
    circle.calcPerimeter();
    circle.calcSquare();
    circle.pointInside();

    console.log(circle);
}
