
const storeMessage = require('./store')

function addMessage(user, message, IDchat){
    return new Promise((resolve, reject)=>{
        if(!user || !message || !IDchat)
        {
            console.error('[messageController] No hay usuario o mensaje')
            return reject ('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
            chat: IDchat,
        }
        const storeResponse = storeMessage.add(fullMessage)
        resolve(storeResponse);
    })
}

 function getMessages(chatFilter){
    return new Promise( async (resolve, reject)=>{
       const Data = await storeMessage.get(chatFilter)
       resolve(Data);
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
        if(id == null || message == null)
        {
            reject(`id o mensaje nulo`);
            return false
        }
        const result = await storeMessage.update(id, message);
        resolve(`Successfully updated: ${result}`)
    })
}

function deleteMessage(id){
    return new Promise(async (resolve, reject)=>{
       if(id == null)
       {
           reject("Falta identificador.")
           return false;
       }
       const deletedMessage = await storeMessage.mdelete(id)
       resolve(deletedMessage)
    })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}