const name = "HP Laptop";
console.log(name.toUpperCase())

const fruitName = new String("Cherry");

console.log(fruitName.length);
console.log(fruitName.indexOf('h'));
console.log(fruitName.charAt('1'));

const storeName = name.substring(0, 2)
console.log(storeName);
console.log(storeName.slice(-8, 3));

console.log(name);

const url = 'https://yes%20you%20are%20leaning%20js'
console.log(url.replaceAll('%20', "-"));
