const http = require('http')
const port = 3000
const host = 'localhost'
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello world!\n')
})
server.listen(port, host, function(){
    console.log(`Listen to the http://${host}:${port}`)
})