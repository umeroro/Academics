const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200 , {'content-type' : 'plain/text'})
    res.end("Hello, MERN Day 2!")
})

server.listen(1000,()=>{
    console.log("Server is running");
})