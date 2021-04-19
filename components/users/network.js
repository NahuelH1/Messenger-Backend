const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/user', (req, res)=>{
   controller.getUsers().then(data => response.success(req, res, data, 200));
})

router.post('/user_register', (req, res)=>{
      controller.addUser(req.body.userData)
      .then((data) => response.success(req, res, data, 201))
      .catch(error => response.error(req, res, `${error}`, 400, ` ${error}` ))

 })

 module.exports = router;