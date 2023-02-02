var http = require('http');

http.createServer(function (req, res) {               res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8888);

console.log('Server running');

// The function passed into the http.createServer() method, 
// will be executed when someone tries to access the computer on port 8888.
