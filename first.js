var http=require('http');
var upper=require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(upper.upperCase('Hello! Good Morning :)'));
}).listen(8080);


