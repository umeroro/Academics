const marvel = ['thor', 'Ironman' , 'spiderman']
const dc = ['superman', 'batman' , 'flash']

// marvel.push(dc)
// console.log(marvel);

// console.log(marvel.concat(dc))

const newArray = [...dc , ...marvel]
console.log(newArray);

const anotherArray = [1,2,3,[4,5],7,[8,[9]]]
console.log(anotherArray.flat(Infinity));

console.log(Array.of('ummorro'));

