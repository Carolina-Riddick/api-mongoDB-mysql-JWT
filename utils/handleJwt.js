const jwt = require('jsonwebtoken');
// const {userModel} = require('../models/index.js')
const getProperties = require('../utils/handlePropertiesEngine.js')
const dinamicId = getProperties();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// create token by 3 steps
// creamos la firma del token/ create Token signature
const tokenSignature = (user) => jwt.sign(
            {
                [dinamicId.id]: user[dinamicId.id],
                role: user.role,
            }, 
                JWT_SECRET_KEY,
            { 
                expiresIn:"10h",
            }
        );

// verificamos si el token fue firmado de manera correcta por el backend / if the token was signed correctly by the backend
const verifyToken = async(tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, process.env.JWT_SECRET_KEY)
    }catch(e){
        console.log(e);
        return null;
    }
};

module.exports = {tokenSignature, verifyToken}