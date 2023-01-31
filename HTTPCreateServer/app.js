const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
    //res.write('Hello Node');
    res.writeHead(200, {'content-Type' : 'text/html' });
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('File not found');
        }else{
            res.write(data);

        }
        res.end();
    });
});

server.listen(port, function(error){
    if(error){
        console.log('Something Went Wrong', error);
    }else{
        console.log('Server listening on port: ' + port);
    }
});
