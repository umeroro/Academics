const http = require('http');
const { datafunc } = require('./data');

const server = http.createServer((req, res) => {
    if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(datafunc()));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

server.listen(3000, () => {
    console.log("Server is running");
});