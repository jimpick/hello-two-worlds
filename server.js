// This needs a comment.


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Joyent NodeKO! - new date\n');
}).listen(80);

