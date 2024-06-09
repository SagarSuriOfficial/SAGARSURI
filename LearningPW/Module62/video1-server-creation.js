const http = require("http");

const PORT = 2000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
    // Home
    // About
    // Contact
    // Product
    // Rest....> Error

    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Welcome to Node.js server by SAGAR");
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("About Page");
    } else if (req.url == "/contact") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Contact Page");
    } else if (req.url == "/product") {

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET',
        }
        
        const apiReq = http.request(options, (apiRes)=>{
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(data.toString());
            })
        })
        
        apiReq.on("error", ()=>{
            console.log(e);
        });
        
        apiReq.end();

       
    } else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Server Error!");
    }
});

server.listen(PORT, () => {
    console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
