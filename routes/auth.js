const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin} = require('../validators/auth.js'); 
// const {compare, encrypt} = require('../utils/handlePsw.js')
const {loginController, registerController} = require('../controllers/auth.js')

//TODO http://localhost:3000/api/auth/login

router.post('/login', validateLogin, loginController)


//TODO http://localhost:3000/api/auth/register
router.post('/register', validateRegister , registerController);

module.exports = router;