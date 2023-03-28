let sum = (0.1 + 0.2).toFixed(2);
console.log(sum);
// -----------------------------------------------------------------
let a = "1";
let b = 2;
let sum2 = +a + b;
console.log(sum2)
// -----------------------------------------------------------------
let flash = prompt(`Вкажіть об'єм пам'яті на флешці в Гб`);
let files = +Math.floor(flash / 0.82);
alert(`Флешка вміщає ${files} файли по 820мб`);
// -----------------------------------------------------------------
let pocketMoney = +prompt("Введіть суму грошей в вашому гаманці");
let chocolatePrice = +prompt("Введіть ціну однієї шоколадки");
let chocolate = +Math.floor(pocketMoney / chocolatePrice);
alert(`Ви можете купити ${chocolate} шоколадки`);
alert(`Ваша решта ${pocketMoney - chocolate * chocolatePrice}`)
//--------------------------------------------------------------
let num = prompt('Вкажіть трьохзначне число');
const ones = num % 10;
const tens = Math.floor(num / 10) % 10;
const hundreds = Math.floor(num / 100);

alert(ones * 100 + tens * 10 + hundreds)
