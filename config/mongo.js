// Archivo para la configuración de Mongo / Configuration file

// Declaracion de paquete de Mongo
const mongoose = require('mongoose');

// BBDD connection 
const dbConnectionNoSql = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    },(err, res) => {
        if(!err) {
            console.log(`****** CORRECT CONNECTION ******`)
        } else {
            console.log(`****** INCORRECT CONNECTION ******`)
        }
    });
};

module.exports = dbConnectionNoSql;