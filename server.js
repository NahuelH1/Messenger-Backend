const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())


const routes = require('./network/routes');



const db = require('./db')
//app.use('app', express.static('public'))

const CONFIG = require('./config.json')
db.connect(CONFIG.URL_CONECTION)
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
    
    socket.on('conectado',(data)=>{
        console.log(data)
    })
    socket.emit('message', 'Esto es un mensaje')
    
 });
 
 
server.listen(3000, function(){
    console.log('La aplicacion está escuchando en http://localhost:3000')
});
