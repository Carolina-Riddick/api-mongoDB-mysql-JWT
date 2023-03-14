const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator.js')


const validateRegister = [
    check('name')
    .exists()
    .notEmpty() 
    .isLength({min:3, max:99}),

    check('age')
    .exists()
    .isNumeric()
    .notEmpty(),

    check('email')
    .exists()
    .isEmail()
    .notEmpty(),

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

    (req,res, next) => {
        validateResults(req, res, next);
    } 
]


const validateLogin = [
    check('email')
    .exists()
    // .isEmail()
    .notEmpty(),

    check('password')
    .exists()
    .notEmpty(),
    // .isLength({min:3, max:15}),

    (req, res, next) => {
        validateResults(req, res, next)
    }
]

module.exports = { validateRegister, validateLogin}