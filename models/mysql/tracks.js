const { sequelize } = require ('../../config/mysql.js')
const { DataTypes } = require('sequelize')
const Storage = require('./storage.js')

const Tracks = sequelize.define(
    'tracks',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        albums: {
            type: DataTypes.STRING,
        },
        cover:{
            type: DataTypes.STRING,
        },
        artist_name: {
            type: DataTypes.STRING,
        },
        artist_nickname: {
            type: DataTypes.STRING,
        },
        artist_nationality: {
            type: DataTypes.STRING,
        },
        start_duration: {
            type: DataTypes.INTEGER
        }, 
        end_duration: {
            type: DataTypes.INTEGER
        },
        mediaId: {
            type: DataTypes.STRING
        },
    },{
        timestamps: true,
    });


    Tracks.findAllData = function(){
        Tracks.belongsTo(Storage, {
            foreignKey: 'mediaId',
            as:'audio'
        })
        return Tracks.findAll({include:'audio'})
    };


    Tracks.findOneData = function(){
        Tracks.belongsTo(Storage, {
            foreignKey: 'mediaId',
            as:'audio'
        })
        return Tracks.findOne(
            {
                where:{ id : id }, 
                include:'audio'
            })
    };


module.exports = Tracks;