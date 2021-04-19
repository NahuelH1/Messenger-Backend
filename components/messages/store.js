const Model = require('./model');

  async function add(message)
  {
    const newDocument = new Model(message);
    const response = await newDocument.save();
    return response;
  }
    
  function get(chatFilter)
  {
    let query =  {
      chat: chatFilter
    }
    const Data =  Model.find(query);
    return Data
  }

  async function update(id, Message)
    {
      const modelMessage = await Model.findOne({_id: id});
      modelMessage.message = Message;
      const newMessage =  await modelMessage.save();
      return newMessage;  
    }

    async function mdelete(id)
    {
      const modelMessage = await Model.deleteOne({_id: id})
      return modelMessage
    }


module.exports = {add, get, update, mdelete};
