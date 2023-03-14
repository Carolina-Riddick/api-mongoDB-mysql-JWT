const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator.js')


// Create an object for each middleware you want to use
const validatorCreateItems = [
    check('name').exists()
    .notEmpty(),
    // .isLength({min:5, max:90}),
    
    check('albums')
    .exists()
    .notEmpty(),

    check('cover')
    .exists(),

    check('artist')
    .exists()
    .notEmpty(),

    check('artist.name')
    .exists()
    .notEmpty(),

    check('artist.nickname')
    .exists()
    .notEmpty(),

    check('artist.nationality')
    .exists()
    .notEmpty(),

    check('duration')
    .exists()
    .notEmpty(),

    check('mediaId')
    .exists()
    .notEmpty(),
    // .isMongoId(),

    (req, res, next) => {
        validateResults(req, res, next)
    }
];



const validatorID = [
    check('id')
    .exists()
    .notEmpty(),
    // .isMongoId(),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
];




module.exports = { validatorCreateItems, validatorID};