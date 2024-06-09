
const http = require('http');

const server = http.createServer((req , res)=>{
    if(req.url == '/') {
        res.write("<h1> HELLO , NODE.js </h1>");
    } else if(req.url == '/about'){
        res.write("<h1>About Page</h1>");
    }
    res.end();
})

server.listen(8000);

console.log("HTTP IS RUNNING ON PORT 8000")