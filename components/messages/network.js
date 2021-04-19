const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');


router.get('/message', (req, res)=>{
   const chatFilter = req.query.chat || null;
   console.log(chatFilter)
   controller.getMessages(chatFilter)
   .then((data)=>{
      response.success(req, res, data, 200)
   })
   .catch(()=>{
      response.error(req, res, "Get error", 400, "Error en el controlador mensage get")
   })
   res.header({"Access-Control-Allow-Origin":"*"})
  })

router.post('/message', (req, res)=>{
    const {user, message, IDChat} = req.body
    controller.addMessage(user, message, IDChat)
     .then((data)=>{
        response.success(req, res, `Creado correctamente:${data.user} ${data.message} `, 201)
     })
     .catch((e)=>{
        response.error(req, res, `Informacion invalida`, 400, `Error en el controlador de message post: ${ e}`)
     });
  })


/*
router.patch('/message/:id', (req, res)=>{
   const id = req.params.id;
   const message = req.body.message;
   controller.updateMessage(id, message)
    .then(()=>{
       response.success(req, res, `Actualizado correctamente`, 200)
    })
    .catch((e)=>{
       response.error(req, res, `Error interno`, 500 , `Error en el controlador de message patch: ${e}` )
    });
})

router.delete('/message/:id', (req, res)=>{
  const id = req.params.id;
  controller.deleteMessage(id)
    .then(()=>{
       response.success(req, res, `Eliminado correctamente`, 200)
    })
    .catch(()=>{
      response.error(req, res, `Error`, 500, `Error method delete controller.`)
    })
})*/


module.exports = router;