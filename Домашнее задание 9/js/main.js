// Задание первое

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arr);
console.log(arr[4]);

let number = document.querySelector('#num1');
let btn1 = document.querySelector('.btn5');

function myNumber() {
    number.innerHTML = arr[4];
}

// Задание второе и третье

let arr2 = [0,1,2,3,4,5,6,7,8,9];
console.log(arr2);

let arr3 = [0,2,4,6,8];
console.log(arr3);

let number2 = document.querySelector('#num2');
let btn2 = document.querySelector('.btnChet');

function myChet() {
    number2.innerHTML = arr3;
}

let arr4 = [1,3,5,7,9];
console.log(arr4);

let number3 = document.querySelector('#num3');
let btn3 = document.querySelector('.btnNeChet');

function myNeChet() {
    number3.innerHTML = arr4;
}

// Задание четвертое

let arr5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr5);
console.log(arr5[2][2],arr5[2][1],arr5[2][0],arr5[1][2],arr5[1][1],arr5[1][0],arr5[0][2],arr5[0][1],arr5[0][0]);

let number4 = document.querySelector('#num4');
let btn4 = document.querySelector('.btnObrat');

let matrix = [9,8,7,6,5,4,3,2,1];

function myObrat() {
    number4.innerHTML = matrix;
}