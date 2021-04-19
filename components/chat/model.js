const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
   userList: {  
           type : [Schema.ObjectId],
            ref : 'user',
   },
});

const model = mongoose.model('Chat', messageSchema)
module.exports = model;