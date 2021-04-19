
const chatStore = require('./store')

 function addChat(users){
    return new Promise( async (resolve, reject)=>{
        if(!users)
        {
            console.error('No hay usuarios')
            return reject ('Los datos son incorrectos')
        }
        
        const responseStore = await chatStore.add(users)
        resolve(responseStore);
    })
}

 function getChatList(IDuser){
    return new Promise( async (resolve, reject)=>{
       const Data = await chatStore.get(IDuser)
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
    addChat,
    getChatList,
    updateMessage,
    deleteMessage
}