const store = require('./store')
const auth = require('../../auth/index')
const bcrypt = require('bcrypt')

async function loggin(email, password)
{
  if(!email || !password)
  {
    return Promise.reject('The email or password has not be introduced.');
  }
  const data = await store.findUser(email); 

  const passwordEncrypted = await bcrypt.hash(data.password, 5);
  
  return bcrypt.compare(data.password, passwordEncrypted)
  .then((bool) => {
       if(bool===true)
      {
        const response = {
          key: auth.sign({data}),
          id: data.id,
          email: data.email,
      }
        return response
      }else{
        return Promise.reject('The password or email introduced do not pair.');
      }
    }) 
    .catch((err)=>{console.log(err)})
}

async function upsert(data)
{
  
   const authData = {
     id: data.id    
   }

  if(data.email){
     authData.email = data.email;
  }

  if(data.password){
    authData.password = await bcrypt.hash(data.password, 5);
  }

  return store.addAuth(authData)
}

module.exports = {
    add : upsert,
    loggin: loggin,
}
