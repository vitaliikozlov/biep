/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//console.log("Hello from nodejs");
/*const calc = require('./calc');
const numbersToAdd = [
    3,
    4,
    10,
    2
];
const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});