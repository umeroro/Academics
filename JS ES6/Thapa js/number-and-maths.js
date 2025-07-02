const balance = 100
console.log(balance);

const newBalance = new Number(140);
console.log(newBalance);

console.log(newBalance.toFixed(2));

console.log(newBalance.toString());

console.log(newBalance.toPrecision(1));

console.log(newBalance.valueOf());

// ------------------Maths--------------------

console.log(Math.max(9,9,8,1,1))

console.log(Math.min(9,9,8,1,1))

console.log(Math.round(5.6));

console.log(Math.random());

console.log(Math.random() * 10);

console.log((Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 20) + 1);

const min = 20
const max = 30

console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1) + min));