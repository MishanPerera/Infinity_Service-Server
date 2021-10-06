const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema

const normalSchema =  new Schema({
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
normalSchema.plugin(autoIncrement.plugin,'NormalService');

const Normal = mongoose.model("NormalService",normalSchema);

module.exports = Normal;