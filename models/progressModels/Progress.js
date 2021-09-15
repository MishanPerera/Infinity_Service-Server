//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema =mongoose.Schema;

const progressSchema = new Schema({

    vNo : {
        type:String,
        required:true //back end validaion
    },
    entryDate:{
        type:String,
        required:true,
    },
    empNo:{
        type:String,
        required:true
    },
    handoverDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
})

autoIncrement.initialize(mongoose.connection);
progressSchema.plugin(autoIncrement.plugin, 'user');

const Progress = mongoose.model("Progress",progressSchema);//document name(table)

module.exports = Progress;