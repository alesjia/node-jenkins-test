const http = require('http')
const webSocket = require('websocket')
const WebSocketServer = webSocket.server
const port = 3000
const httpServer = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello world!')
    res.end()
})

const webSocketServer = new WebSocketServer({
    httpServer,
    autoAcceptConnections: true
})

webSocketServer.on('connect', connection => {
    connection.on('message', message => {
        console.log(message)
        if (message.type === 'utf8') {
            console.log(`>> Message content from client: ${message.utf8Data}`)
            connection.sendUTF(`[from server] ${message.utf8Data}`)
        }
    })
        .on('close', (responseCode, description) => {
            console.log(`[${new Date()}] Peer ${connection.remoteAddress} disconnected.`)
        })
})

httpServer.listen(port, function () {
    console.log(`Listent to http://localhost:${port}`)
})