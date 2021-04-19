const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');



router.post('/login', (req, res)=>{
   
      controller.loggin(req.body.email, req.body.password)
      .then((token) => response.success(req, res, token, 201))
      .catch(error => response.error(req, res, "Error interno", 400, `${error}` ))

 })

 module.exports = router;