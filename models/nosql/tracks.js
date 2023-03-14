const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        albums:{
            type: String,
        },
        cover:{
            type: String,
            validate:{
                validator:(req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name: {
                type: String,
            },
            nickname:{
                type: String,
            },
            nationality:{
                type: String,
            },
        },
        duration:{
            start:{
                type: Number,
            },
            end:{
                type: Number,
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);




// Static method to make querys 
TracksSchema.statics.findAllData = function (name){
    const joinData = this.aggregate([
        {
            $lookup:{
                from:'storages',
                localField: 'mediaId',
                foreignField: '_id',
                as: 'audio',
            },
        },
        {
            $unwind : '$audio' // Obtengo la info en forma de objeto y no de array / I get the info as an object, not as an array
        }
    ])
        return joinData
};


TracksSchema.statics.findOneData = function(id){
    const joinData = this.aggregate([
        {
            $lookup:{
                from:"storages",
                localField : "mediaId",
                foreignField: "_id",
                as:"audio"
            },
        },
            {
                $unwind:'$audio',
            },
            {
                $match:{
                    _id:mongoose.Types.ObjectId(id)
                }
        }
    ]);
    return joinData;
}



TracksSchema.plugin(mongooseDelete,{
    overrideMethods: "all",
});

module.exports = mongoose.model("tracks", TracksSchema);