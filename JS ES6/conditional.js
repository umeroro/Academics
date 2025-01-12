let password = '';
document.getElementById('pass').addEventListener('input',(key)=>{
    password = key.target.value;
    let result = password.length >= 8 ? "Process Continous" : "Password Must Be 8 Characters";
    let para = document.getElementById('result');
    if (!para) {
        para = document.createElement('p');
        para.id = 'result';
        document.body.append(para);
    }
    para.innerText = result;
});
// let password = prompt("Enter Password : ");