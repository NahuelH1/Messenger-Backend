const Model = require('./model');
  function add(users)
  {
    const Chat = {
                    userList: users,
                 }
    const newDocument = new Model(Chat);
    return newDocument.save();
  }
    
  async function get(IDuser)
  {
    const query = {userList: { $all: [IDuser]}}
    const Chat = await Model.find(query)
                    .populate("userList")
    return Chat
  }


module.exports = {add, get};
