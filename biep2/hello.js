/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
// загрузка модуля http
var http = require('http');
// создание http-сервера
function onRequest(request,response){
    console.log("Request received.");
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
// заголовок контента */
 // содежимое index.js
const http = require('http');
const port = 8888;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
}
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
        }
    console.log(`server is listening on ${port}`);
});