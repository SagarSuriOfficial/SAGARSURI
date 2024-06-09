 const express = require('express');

 const app = express();

 const PORT = 2000
 const HOSTNAME = 'localhost'

 app.get('/',(req, res)=>{
    res.send('<h1>HELLO WORLD</h1>');
 })

 app.get('/about',(req, res)=>{
    res.send('About Page');
 })

 app.get('/contact',(req, res)=>{
    res.send('Contact Page');
 })


 app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
 })