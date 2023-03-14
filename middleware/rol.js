const { handleHttpErrors } = require("../utils/handleHttpErrors");

/**
 * Array with the roles 
 * @param {*} roles 
 * @returns 
 */



const checkRole = (roles) => (req, res, next) => {
        try {
            const {user} = req;
            console.log({user});
            const roleByUser = user.role;
            console.log(roleByUser);
            const checkValueRol = roles.some((rolSingle) => roleByUser.includes(rolSingle));
            
            if(!checkValueRol){
                handleHttpErrors(res,'ERROR_USER_NOT_PERMISSIONS', 401);
                return;
            }

            next();

        }catch(e) {
            handleHttpErrors(res, 'ROLE_ERROR_PERMISSIONS', 403);    
            return;        
        }
}





module.exports = checkRole;