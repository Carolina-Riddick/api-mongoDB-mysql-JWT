
const fs = require('fs');
const { storageModel } = require('../models/index.js');
const {matchedData} = require('express-validator');
const {handleHttpErrors} = require('../utils/handleHttpErrors')

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = (`${__dirname}/../storage/`)

//GET METHOD
const getItems = async (req, res) => {
    try{
        const data = await storageModel.find({})
        res.send({data}) 
    }catch(e){
        console.log(e)
        handleHttpErrors(res, "ERROR GET_ITEMS_STORAGE", 403)
    }
};


//GET BY ID METHOD
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id)
        res.send({ data })
    }catch(e) {
        console.log(e)
        handleHttpErrors(res,'EEROR GET ID ITEM = STORAGE', 403);
    }
};

//PUT METHOD
const updateItems = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await storageModel.findByIdAndUpdated(id, body);
        res.send({ data })
        console.log({data})
    }catch(e){
        console.log(e)
        handleHttpErrors(res,' ERROR UPDATING ITEM');
    }
};



//POST METHOD
const createItems = async (req, res) => {
    try{
        const {file} = req;
        const fileData = {
        filename : file.filename,
        url : `${PUBLIC_URL}/${file.filename}`,
    }
    const data = await storageModel.create(fileData)
    res.send({data});
    }catch(e){
        handleHttpErrors(res,`ERROR: Could not POST ITEM: ${e.message}`)
    }
};


//DELETE METHOD
const deleteItems = async (req, res) => {
    try{
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);

        const filename = data.filename;
        const filePath = MEDIA_PATH + '/' + filename;

        // Soft delete methods. Will delete the file but not from the DDBB
        // fs.unlinkSync(filePath);

        // --------- One soft delete method is the delete() method. It will delete the doc but not from de DDBB --------
        const deletedItem = await storageModel.delete({_id:id}) 
        res.send(`The doc ${filename} has been deleted`)

        // ------- deleteOne() method will delete from de DDBB. --------------------------------
        // await storageModel.deleteOne({id})
        
        const messageFile = ` Document ${filename} in ${filePath} was successfully deleted`
        res.send(message = messageFile)

    }catch(e){
        handleHttpErrors(res,'ERROR IN DELETE ITEM : ' + e.message);
        console.log(e)
    }
};



module.exports = {getItems,getItem, updateItems, createItems, deleteItems}