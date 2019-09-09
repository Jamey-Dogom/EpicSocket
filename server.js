const express = require('express')
const app = express()
const socket = require('socket.io')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const server = app.listen(3333, () => console.log('we litty on 3333'));

let buttonCount = 0;

app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.render('index', {
        count: buttonCount
    });
})

const io = socket(server)

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('add', function(data){
        data.val = buttonCount++;
        io.sockets.emit('add', data);
    });

    socket.on('reset', function(data){
        buttonCount = data.res;
    })

});