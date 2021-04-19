const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())


const routes = require('./network/routes');



const db = require('./db')
//app.use('app', express.static('public'))

db.connect('mongodb+srv://sa:12345@platzicourse.umytq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
app.use(express.json());
app.use(express.urlencoded({extended : false}));
routes(app);

const server = require('http').Server(app);
const io = require('socket.io', {
    cors: {
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})(server);

io.on('connection', (socket) => {

    socket.on('conectado',()=>{
        console.log("usuario conectado")
    })
 });
 
 
server.listen(3000, function(){
    console.log('La aplicacion está escuchando en http://localhost:3000')
});
