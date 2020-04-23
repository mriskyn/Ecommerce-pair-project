const express = require('express')
const session = require('express-session')
const router = require('./routes')
const http = require('http')
const socketIO = require('socket.io')
const { Chat } = require('./models');

const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', router)

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    if (msg.includes(' ')) {
      msg.split(' ')
    }
    Chat.findAll({})
      .then(data => {
        let check = false
        data.map(el => {
          if (msg.includes(el.keywords)) {
            check = true
            io.emit('chat message2', el.message)
          }
        })

        if(!check){
          io.emit('chat message2', 'keywords salah')
        }
      })
      .catch(error => {
        res.render('error', { error })
      })
  });
});

server.listen(port, () => {
  console.log(`this app running on port: ${port}`)
})