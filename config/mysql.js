//Import sequelize
const { Sequelize } = require('sequelize');

// Declaramos las variables de conexion / Conection variables to DDBB
const database = process.env.MYSQL_DATABASE 
const username = process.env.MYSQL_USERNAME
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST

// Creo una nueva instancia de Sequelize / Create new instance of Sequelize
const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {
        dialect:'mysql',
        host:host,
    }   
);

//Crear conexion a la BBDD / create connection to DDBB
const dbConnectMysql = async() => {
    try{
        await sequelize.authenticate()
        console.log(' ****** Connection established to database MYSQL ******')
    
        const created =  sequelize.sync({force: true});

        if(created) {
            console.log("==> TABLE DONE !");
        }
    
    }catch(e){
        console.log(e.message + `Error to connect MYSQL`);
        res.send(e.message);
    }
    // return dbConnectMysql;
};

module.exports = { sequelize, dbConnectMysql }