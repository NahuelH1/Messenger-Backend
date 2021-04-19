const db = require('mongoose');
db.Promise = global.Promise;

//'mongodb+srv://sa:12345@platzicourse.umytq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
async function connect(url)
{
  db.connect(url ,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
  })
  console.log('[db] conectada con exito')
}

module.exports = {connect};