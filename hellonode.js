console.log('Hello Node');

var http = require("http");

http.createServer((request, response)=>{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8888);

console.log('Server runing at http://127.0.0.1:8888/');