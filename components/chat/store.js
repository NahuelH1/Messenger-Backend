const Model = require('./model');

  function add(users)
  {
    const Chat = {
                    userList: users,
                 }
    const newDocument = new Model(Chat);
    return newDocument.save();
  }
    
   function get(IDuser)
  {
    const query = {userList: { $all: [IDuser]}}
    const Data =  Model.find(query);
    return Data
  }


module.exports = {add, get};
