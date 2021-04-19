const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const mySchema = new Schema({
   id: String,
   email: String,
   password: String,
});

const model = mongoose.model("auth", mySchema);

module.exports = model;
