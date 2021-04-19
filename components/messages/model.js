const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
   user: String,
   message: String,
   date: String,
   chat: {
           type: Schema.ObjectId,
            ref: 'chat'
   }

});

const model = mongoose.model('Message', messageSchema)
module.exports = model;