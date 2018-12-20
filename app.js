const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server
const wss = new WebSocketServer({
    port: 3000
})
wss.on('connection', ws => {
    console.log('connection OK')
    ws.on('message', message => {
        console.log(message)
        if (message === '在吗') {
            ws.send('在')
        } else if (message === '你好') {
            ws.send('你好')
        } else if (message === '能听懂汉语吗') {
            ws.send('能听懂汉语')
        } else if (message === '真的吗') {
            ws.send('真的')
        } else {
            ws.send(message)
        }
    })
})