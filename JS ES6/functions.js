function addNum(...numbers){
    let out = 0;
    for (let i=0;i<numbers.length;i++){
        out = numbers[i] + out;
    }
    return out
}

let result = addNum(1,2,3,4,5,6);
console.log(result);

function mulNum(a,b,cb){
    let ans = 0;
    ans = a*b;
    cb(ans)
}

mulNum(2,3,(val)=>{
    console.log(val);
})