// primitive data types

// number , string , Boolean , null , undefined , symbol , biginit

const number = 123;
const string = "letter";
const isLoggedIn = false;
const state = null;
let city;

// non-primitive data types

// array , objects

const fruits = ["mango", "cherry", "watermelon"];
const information = {
  name: "xyz",
  age: "01",
};

//stack (primitive) and heap (non-primitive)

//stack provide copy not orginal

let fruitNameOne = "cherry";
let fruitNametwo = fruitNameOne;
fruitNametwo = 'mango'
console.log(fruitNameOne);
console.log(fruitNametwo);

//heap

let userOne = {
  email: "userOne@gmail.com",
  age: 30,
};

let userTwo = userOne;
userTwo.email = 'userTwo@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)