let a = 10;
let b = 20;
let result = a+b;
async function getData() {
    let data = await fetch('https://catfact.ninja/fact');
    console.log(await data.json());
}

getData();
console.log(result);