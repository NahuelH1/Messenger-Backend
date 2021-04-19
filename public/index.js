var socket = io.connect('http://localhost:8000',{
    forceNew:true
})

socket.on('mensaje', function(data){
    console.log(data);
})

/*import loadMessages from './modules/loadMessages.js';
import addUser from './modules/addUsers.js';
addUser();
loadMessages();*/