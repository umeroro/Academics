// use logical operator to find wheather the age of a person lies between 10 and 20?

age = prompt("Enter Age : ")
console.log(age>10 && age<20? "Age is lies btw 10 to 20" : "Age is not lies btw 10 to 20" )

//demostrate the use of swicth case statement in javascript

let age1 = prompt("Enter Age :")
switch(age1){
  case '18':
    console.log("You can driver the Car");
    break;
  case '10':
    console.log("You can't drive the car");
    break;
}
console.log("switch is working")

//write a js program to find wheather a number is Divisible by 2 or 3

number = prompt("Enter Number :")
number = Number.parseInt(number)
console.log(number%2==0 && number%3==0? "Number is Divisble" : "Number is not Divisible")

//write a js program to find wheather a number is Divisible by either 2 or 3

number = prompt("Enter Number :")
number = Number.parseInt(number)
console.log(number%2==0 || number%3==0? "Number is Divisble" : "Number is not Divisible")

//print " you can drive " or " you cannot drive based on age being operator then 18 using ternay operator "

let age = prompt("Enter Age :")
console.log(age<18? "not drive":"Can drive")
//or
console.log(age>18? "not drive":"Can drive")