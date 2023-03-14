const { sequelize } = require('../../config/mysql.js')
const { DataTypes } = require('sequelize') 

// Definimos modelo de usuarios / Define models of users

const Users = sequelize.define(
    'users',
    {
        name:{
            type : DataTypes.STRING,
            allowNullValues : false,
        },
        age:{
            type: DataTypes.NUMBER
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        role:{
            type: DataTypes.ENUM(['user', 'admin'])
        },
    },  {
        timestamps: true,
        }      
    );

module.exports = Users;