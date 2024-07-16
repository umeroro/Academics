
var variable = "this is the variable"
if(true){
    var more = "This is the more"
}
console.log(variable + more)
let variable1 = "this is the variable one"
if(true){
   let more1 = "This is the more one"
}
console.log(variable1 + more1)
function varTest(){
    let x = 10;
    if(true){
        x = 20;
        console.log(x);
    }
    console.log(x);
}

varTest();
const b = 1;
console.log(b)
template litrals
var sentence = 'this is the sentence \n in the template literal'
console.log(sentence)
var sentence = `this is the sentence
in the template literal`
console.log(sentence)
var drink = 'coffee';
var food = 'cake';
var time = 'morning';
console.log('I am drinking ' + drink + ' and eating ' + food + ' in ' + time);
console.log(`I am drinking ${drink} and eating ${food} in ${time}`);
func1 = () => {
    return 'hi';
}
console.log(func1());
func2 = (x, y) => x*y;
var x = 1;
var y = 5;
console.log(func2(x,y));

var letter = ['a', 'b', 'c', 'd', 'e'];
console.log(letter);
console.log(...letter);
var letter2 = [...letter, 'f', 'g'];
console.log(letter2);
var letter = ['a', 'b', 'c', 'd', 'e'];
var letter2 = [letter + 'f', 'g'];
console.log(letter2);
var arra = [1,2,3]
func1 = (x,y,z) => {
    return `${x} ${y} ${z}`
}

console.log(func1(...arra));