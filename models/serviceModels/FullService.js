const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema

const fullSchema =  new Schema({
    vNo:{
        type:String,
        required:true
    },

    cusName:{
        type:String,
        required:true
    },

    entryDate:{
        type:String,
        required:true
    },

    handoverDate:{
        type:String,
        required:true
    },

    description:{
        type:String
    },


    totalFPrice:{
        type:Number,
        required:true
    },

    laborCost:{
        type:Number,
        required:true
    },

    totalCost:{
        type:Number,
        required:true
    },
})

autoIncrement.initialize(mongoose.connection);
fullSchema.plugin(autoIncrement.plugin,'FullService');

const Full = mongoose.model("FullService",fullSchema);

module.exports = Full;