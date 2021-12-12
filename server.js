const express = require("express")
const app = express()
const http = require("http").createServer(app)


const PORT = process.env.Port || 3000

http.listen(PORT, () => {
    console.log('Listening on port 3000')
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')

    socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg)
    })
})




