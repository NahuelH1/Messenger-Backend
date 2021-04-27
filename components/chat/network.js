const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.post('/chatCreate', (req, res)=>{
   console.log(req.body.users)
   controller.addChat(req.body.users)
    .then((data)=>{
       response.success(req, res, `${data}`, 201)
    })
    .catch((e)=>{
       response.error(req, res, `Informacion invalida`, 400, `Error en el controlador de message post: ${ e}`)
    });
 })


router.get('/chatList', (req, res)=>{
   controller.getChatList(req.query.user)
   .then((data)=>{
      response.success(req, res, data, 200)
   })
   .catch(()=>{
      response.error(req, res, "Get error", 400, "Error en el controlador mensage get")
   })
   res.header({"Access-Control-Allow-Origin":"*"})
  })

module.exports = router;