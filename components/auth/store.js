const Model = require('./model');

function add(user)
{
   const newUser = new Model(user)
   return newUser.save();
}

async function findUser(email)
{
  const data = await Model.findOne({email:email});
  return data;
}

module.exports = {
    addAuth : add,
    findUser: findUser,
};