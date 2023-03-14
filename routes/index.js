const express = require('express'); 
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname // Ruta absoluta/ absolut route

const removeExtension = (fileName) => {
    // file name without extension 
    // fileName.split('.').shift() = ['track', 'js']
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${file}`))
        // console.log(`./${file}`)
    }
});


module.exports = router;