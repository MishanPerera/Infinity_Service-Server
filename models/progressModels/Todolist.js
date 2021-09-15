//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema =mongoose.Schema;

const todoSchema = new Schema({

    vNo : {
        type:String,
        required:true //back end validaion
    },
    entryDate:{
        type:String,
        required:true,
    }
})

autoIncrement.initialize(mongoose.connection);
todoSchema.plugin(autoIncrement.plugin, 'user');

const Todolist = mongoose.model("Todolist",todoSchema);//document name(table)

module.exports = Todolist;