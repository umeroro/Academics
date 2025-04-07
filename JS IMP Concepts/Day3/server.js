const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(`Request at: ${new Date().toLocaleTimeString()}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome Car Club!')
})

app.get('/cars',(req,res)=>{
    const cars = [
        { name : 'Nissan GTR R35' , hp : 600 },
        { name : 'BMW M5' , hp : 550 },
        { name : 'Mercedes C63 AMG' , hp : 450 }
    ]
    res.json(cars);
})

app.use((req,res)=>{
    res.status(404).send('404 - not found');
})

app.listen(3000,()=>{
    console.log('server is running');
})