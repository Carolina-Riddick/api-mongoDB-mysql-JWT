// Definir modelo / Schema declaration
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

// Estructura del objeto / Object Structure
const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,  
        },
        age:{
            type: Number,
        },
        email:{
            type: String,
            unique: true,
        },
        password:{
            type: String,
            select:false,
        },
        role:{
            type:["user", "admin"],
            default : "user",
        }
    },   
    {
        timestamps: true, // in relation with de date of creation createAt, and the date of update updateAt
        versionKey: false,
    });


    UserSchema.plugin(mongooseDelete, {
        overrideMethods: 'all'
    })

    module.exports = mongoose.model('users', UserSchema)