let age = +prompt("Введіть ваш вік");

if (0 < age && age <= 11) {
    console.log("Ви дитина");
}   else if (11 <= age && age <= 17 ) {
    console.log("Ви підліток");
}   else if (18 <= age && age <= 59 ) {
    console.log("Ви дорослий");
}   else if (60 <= age && age <= 100 ) {
    console.log("Ви пенсіонер");
}   else {
    console.log("Незрозумілий вік")
}
//-----------------------------------------------------------
let numb = +prompt("Введіть  будь яке число від 0 до 9");

switch (numb) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    default:
        console.log("Некоректне число")
}
// ------------------------------------------------------------
let lowerNumber = parseInt(prompt("Введіть нижню межу діапазону:"));
let upperNumber = parseInt(prompt("Введіть верхню межу діапазону:"));
let sum = 0;

if (upperNumber < lowerNumber) {
    console.log("Некоректний діапазон!");
} else {
    for (let i = lowerNumber; i <= upperNumber; i++) {
        sum += i;
    }
    console.log("Сума чисел в діапазоні від " + lowerNumber + " до " + upperNumber + " дорівнює: " + sum);
}
//--------------------------------------------------------------------------------------------------------------------
let num1 = parseInt(prompt("Введіть перше число:"));
let num2 = parseInt(prompt("Введіть друге число:"));

while (num2 !== 0) {
    let t = num1 % num2;
    num1 = num2;
    num2 = t;
}

console.log(`НСД: ${num1}`);
//--------------------------------------------------------------------------------------------------------------------
const number = prompt("Введіть п'ятирозрядне число:");
let isPalindrome = true;

if (number.length !== 5) {
    console.log("Ви ввели неправильне число!");
} else {
    for (let i = 0; i < 2; i++) {
        if (number[i] !== number[number.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("Це паліндром!");
    } else {
        console.log("Це не паліндром!");
    }
}
//--------------------------------------------------------------------------------------------------------------------
const amount = +prompt("Вкажіть суму покупки")

if (amount < 0) {
    console.log("Число не може бути від'ємним")
} else {
    if (amount < 200) {
        console.log(`Сума до оплати ${amount}`)
    } else if (amount >= 200 && amount < 300) {
        let discount = amount -((3 * amount) / 100)
        console.log(`Сума до оплати ${discount}`)
    } else if (amount >= 300 && amount < 500) {
        let discount = amount -((5 * amount) / 100)
        console.log(`Сума до оплати ${discount}`)
    } else if ( amount >= 500) {
        let discount = amount -((7 * amount) / 100)
        console.log(`Сума до оплати ${discount}`)
    } else {
        console.log("Не зрозуміле значення")
    }
}
//-------------------------------------------------------------------------------------------------------------------------
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
    const num = Number(prompt(`Введіть будь яке число 10 разів`));

    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }

    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Кількість додатніх чисел: ${positiveCount}`);
console.log(`Кількість від'ємних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
console.log(`Кількість парних чисел: ${evenCount}`);
console.log(`Кількість непарних чисел: ${oddCount}`);
//-------------------------------------------------------------------------------------------------------------------------
let day = 0;

while (true) {
    let dayOfWeek = 0;

    switch (day) {
        case 0:
            dayOfWeek = 'Неділя';
            break;
        case 1:
            dayOfWeek = 'Понеділок';
            break;
        case 2:
            dayOfWeek = 'Вівторок';
            break;
        case 3:
            dayOfWeek = 'Середа';
            break;
        case 4:
            dayOfWeek = 'Четвер';
            break;
        case 5:
            dayOfWeek = 'П\'ятниця';
            break;
        case 6:
            dayOfWeek = 'Субота';
            break;
    }

    const answer = confirm(`${dayOfWeek}. Хочеш побачити наступний день?`);

    if (!answer) {
        break;
    }

    day = (day + 1) % 7;
}