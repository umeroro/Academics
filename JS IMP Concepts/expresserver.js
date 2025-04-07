const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(`Request Get : ${req.method} ${req.url}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome to Express Server');
});

app.get('/student',(req,res)=>{
    const student = [
        { name : 'webdeveloper' , age : 20 },
        { name : 'merndeveloper' , age : 18 }
    ]
    res.json(student);
});

app.listen(3000,()=>{
    console.log("Server is running");
})
