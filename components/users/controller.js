const store = require('./store')
const storeAuth = require('../auth/store')
const controllerAuth = require('../auth/controller')
function getUsers()
{
   return store.getUsers();
}

async function addUser(userData)
{
    const {username, password, email } = userData

    if(!userData)
    {
        return Promise.reject('userData is not defined');
    }

    if(!username || !password || !email)
    {
        return Promise.reject('There is a field missed');
    }
 
    const emailExtistPreviusly = await emailValidation(email);
    if(emailExtistPreviusly)
    {
        return Promise.reject('The mail introdused has been used.');
    }
    const user = {
        username: username,
        email: email,
    }
    const newUser = await store.addUser(user);

     controllerAuth.add({
      id: newUser.id,
      email: newUser.email,
      password: password,
    })

    return newUser
};

async function emailValidation(email)
{
    const response = await storeAuth.findUser(email);
    return !(response === null)
}

module.exports = {
    addUser,
    getUsers
}