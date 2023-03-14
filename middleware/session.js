const {handleHttpErrors} = require('../utils/handleHttpErrors');
const {verifyToken} = require('../utils/handleJwt');
const {userModel} = require('../models/index.js');

const getProperties = require('../utils/handlePropertiesEngine.js');
const dinamicId = getProperties(); 

const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            handleHttpErrors(res,"NEED_AUTHO", 401);
            return 
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token); 
        
        if(!dataToken){
            handleHttpErrors(res,'NOT_PAYLOAD_DATA / NOT_JWT', 401);
            return
        }

        const query = {
            [dinamicId.id] : dataToken[dinamicId.id]
        }

        const user = await (userModel.findOne(query))
        req.user = user;
        next(); // session in

    }catch(e){
        handleHttpErrors(res, ' NOT SESSION ', 401);
        return
    }
}

module.exports = authMiddleware;