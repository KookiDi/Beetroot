let myFunc = function () {

}
function get() {

}
let func = () => {

}
//-------------------------------------------------------------
function countArguments() {
    return arguments.length;
}
//-------------------------------------------------------------
let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");

function getTwoNumbers(firstNumber,secondNumber) {
    if (firstNumber < secondNumber) {
        return console.log(-1)
    } else if (firstNumber > secondNumber) {
        return console.log(1)
    } else {
        return console.log(0)
    }
}
getTwoNumbers(firstNumber,secondNumber);
//-------------------------------------------------------------
let getFactorial = +prompt("Введіть факторіал");

function calcFactorial(getFactorial) {
    let product = 1;

    for (let i = 2;i <= getFactorial;i++) {
        product *= i;
    }
    return console.log(product)
}
calcFactorial(getFactorial)
//--------------------------------------------------------------------
function joinDigits() {
    let firstDigit = prompt('Введіть першу цифру:');
    let secondDigit = prompt('Введіть другу цифру:');
    let thirdDigit = prompt('Введіть третю цифру:');

    let number = parseInt(firstDigit + secondDigit + thirdDigit);

    return number;
}

let result = joinDigits();
console.log(result);
//--------------------------------------------------------------------

function calculateArea(length, width = length) {
    return length * width;
}
console.log(calculateArea(2))
//--------------------------------------------------------------------
let perfNumber = +prompt("Введіть число");

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfectNumber(perfNumber))
//--------------------------------------------------------------------
let min = +prompt("Min");
let max = +prompt("Max");

function perfectNumbersInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            console.log(i);
        }
    }
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

perfectNumbersInRange(min, max);