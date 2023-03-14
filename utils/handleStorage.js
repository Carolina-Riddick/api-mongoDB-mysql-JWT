const express = require('express');
const multer = require('multer');


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`; // Here is where the files will be saved
        cb(null, pathStorage);

    },
    filename: function(req, file, cb){
        const fileExtension = file.originalname.split('.').pop()
        console.log(file)
        const filename = `file-${Date.now()}.${fileExtension}`;
        console.log(filename)
        cb(null, filename)
    },
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;