const express = require('express'); 
const router = express.Router();
const authMiddleware = require('../middleware/session');
const customHeader = require('../middleware/customHeader.js');
const {validatorCreateItems , validatorID } = require('../validators/tracks.js')
const {getItems, getItem, createItems, updateItems, deleteItems} = require('../controllers/tracks.js');
const checkRole = require('../middleware/rol.js');


router.get('/', authMiddleware ,getItems);

router.get('/:id', authMiddleware, validatorID, getItem);

router.post('/', authMiddleware, checkRole(['admin', 'user']), customHeader, validatorCreateItems, createItems);

router.put('/:id', authMiddleware, validatorID, updateItems);

router.delete('/:id', authMiddleware, validatorID, deleteItems);

module.exports = router;