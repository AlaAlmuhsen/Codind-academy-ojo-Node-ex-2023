const http = require('http');

const server = http.createServer((req , res) => {
    res.writeHead(200,{
        'Content-Type': 'text/plain',
    })
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 200;
    res.end('hello world');
})

server.listen(8080 , () => {
    console.log("Listen on port 8080");
})
