const Model = require('./model');

function get()
{
   return Model.find();
}

function add(user)
{
   const newUser = new Model(user)
   return newUser.save();
}

module.exports = {
  getUsers: get,
  addUser: add,
}