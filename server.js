var http = require('http'),
    port = process.env.PORT || 8001

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write("<h1>Jim Pick's Super Duper Node.js App</h1>")
});

server.listen(parseInt(port))
