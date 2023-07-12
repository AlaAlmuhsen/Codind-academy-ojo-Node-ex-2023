const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        })
        res.end('Home')
    }
    else if (req.url === '/file') {
        const data = fs.readFileSync('./docs/read.txt' , 'utf8'); 
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        })
        res.end(data);
    }

})

server.listen(8080 , () => {
    console.log("Listen on port 8080");
})
