var http = require('http'),
    port = parseInt(process.env.PORT) || 8001 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    '<html>\n' +
    '<head><title>Hello Two Worlds</title><head>\n' +
    '<body>\n' +
    '<h1>Hello Two Worlds</h1>\n' +
    '<p>Heroku Hello World project that works on Joyent ' +
    'no.de as well as Heroku.</p>\n' +
    '<ul>\n' +
    '<li><a href="http://github.com/jpick/hello-two-worlds">http://github.com/jpick/hello-two-worlds</a></li>\n' +
    '<li><a href="http://jimpick2.no.de">http://jimpick2.no.de/</a></li>\n' +
    '<li><a href="http://jimpick.heroku.com">http://jimpick.heroku.com/</a></li>\n' +
    '</ul>\n' +
    '</body>\n' +
    '</html>'
  )
}).listen(port)
