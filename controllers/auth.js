const { matchedData } = require('express-validator');
const {encrypt, compare} = require('../utils/handlePsw.js')
const {tokenSignature} = require('../utils/handleJwt.js')
const {userModel} = require('../models/index.js')
const {handleHttpErrors} = require('../utils/handleHttpErrors.js')

const registerController = async(req, res) => {
try{
        req = matchedData(req);
        const pswHash = await encrypt(req.password)
        const body = {...req, password : pswHash }
        const dataUser = await userModel.create(body)
        console.log({ dataUser })
        // Si no queremos que se vea la contraseña / If we want the psw be hidden
        // dataUser.set("password", undefined, {strict:false})

        const data = {
            user:dataUser,
            token: tokenSignature(dataUser),
        } 
    res.send({ data });
    console.log(data.body)
}catch(e){
        handleHttpErrors(res, 'ERROR_REGISTER_USER');
    }       
}

const loginController = async(req, res) => {
    try {
        req = matchedData(req);
        const user = await userModel.findOne({email:req.email})
        // .select('password email name age role');
        if (!user) {
            handleHttpErrors(res, 'USER_NOT_FOUND', 404);
            return 
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword)
        if(!check) {
            handleHttpErrors(res, 'PASSWORD_INVALID', 401);
            return
        }
        // user.set('password', undefined, {strict:false});

        const tokenJwt = tokenSignature(user);

        const data = {
            token: {tokenJwt},
            user: user,
        }
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpErrors(res, 'ERROR_LOGIN_USER');
    }
}

module.exports = { registerController, loginController }