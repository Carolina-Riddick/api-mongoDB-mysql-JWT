const { tracksModel } = require('../models/index.js')
const {matchedData} = require('express-validator')
const {handleHttpErrors} = require('../utils/handleHttpErrors')

// BBDD 
//GET METHOD
const getItems = async (req,res) => {
    try {    
        const user = req.user;
        const data = await tracksModel.findAllData({})
        res.send({data, user});
    } catch(e){
        handleHttpErrors(res,'ERROR IN GET ITEMS - TRACKS')
    }
    
}

//GET BY ID METHOD
const getItem = async (req,res) => {
    try {
        req = matchedData(req) // Obtain clean data 
        const {id} = req;
        const data = await tracksModel.findOneData(id);
        res.send({data});
    } catch (e) {
        handleHttpErrors(res, 'ERROR IN ITEM BY ID = TRACKS', 404);
    }
};

//POST METHOD
const createItems = async (req,res) => {
    try {
        const cleanBody = matchedData(req); 
        const data = await tracksModel.create(cleanBody);
        res.send({data});   
    } catch (e) {
        handleHttpErrors(res, 'PROBLEM IN CREATE ITEMS = TRACKS', 403);
    }
}

//PUT METHOD
const updateItems = async (req,res) => {
    try {
        const {id, ...body} =  matchedData(req); ;
        const updateInfo = await tracksModel.findOneAndUpdate(id, body);
        res.send({updateInfo})
        console.log(updateInfo)
    } catch (e) {
        handleHttpErrors(res, 'PROBLEM UPDATE ITEMS = TRACKS', 404);
    }
};


//DELETE METHOD
const deleteItems = async (req,res) => {
    try {
        const {id} = matchedData(req);
        const data = await tracksModel.findByIdAndDelete(id);
        // const data = await tracksModel.deleteOne({id}); // Delete from the DDBB
        // const data = await tracksModel.delete({id}); // Delete BUT STILL APPEAR IN THE DDBB, we can keep the data in the database

        res.send({message: "deleted field"});
    } catch (e) {
        console.log(e)
        handleHttpErrors(res, 'PROBLEM_DELETE_ITEMS = TRACKS', 404);
    }
}

module.exports = { getItems, getItem, updateItems, createItems, deleteItems}