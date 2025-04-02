const numbers = [1,2,3,4,5];

const doublearray = numbers.map((num)=>{
    return num*2;
})

console.log(doublearray);

const divide = numbers.filter((num)=>{
    return num%2===0;
})

console.log(divide);
