const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage.js')
const {getItems, getItem, updateItems, deleteItems, createItems} = require('../controllers/storage.js')
const {validatorID} = require('../validators/storage.js')

router.get('/', getItems);

router.get('/:id', validatorID, getItem);

router.post('/', uploadMiddleware.single('myfile'), createItems);

router.put('/:id', updateItems); 

router.delete('/:id', validatorID, deleteItems)


module.exports = router;