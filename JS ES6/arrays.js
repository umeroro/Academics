const team = ["U","G","H"];
team.push("M","N","o");
//heterogenous array in js
const details = [12,'Sins',100,"A",true,"😁"];
details.push({semester: '7th'})

console.log(details.indexOf(true));
console.log(details);
console.log(team)

const Names = ["Lahore","Multan","Peshwar","Islamabad","Queta","Karachi"]
//forEach function
let newName = Names.forEach((val)=>{console.log(val)});



const number = [1,2,3,4,5]

//Map Function
let mapFunction = number.map((n)=>{
    return n*2;
})
console.log(mapFunction)
//find
let findFunction = number.find((val)=>{ return val === 5})
console.log(findFunction)
//indexof
let indexFunction = number.indexOf((val)=>{ return val === 2})
console.log(indexFunction)
//filter
let filterFunction = number.filter((val)=>{ return val % 2 === 0})
console.log(filterFunction)
//slice
let sliceFunction = number.slice(2);
console.log(sliceFunction)
//splice
let spliceFunction = number.splice(1,2);
console.log(sliceFunction)

console.log(number);