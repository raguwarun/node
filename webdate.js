var http=require('http');
var webdate=require('./datetime');

http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("The date and time currently is " + webdate.myDateTime());
res.end();
}).listen(8080);