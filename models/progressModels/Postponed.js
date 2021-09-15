//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema =mongoose.Schema;

const postponedSchema = new Schema({

    vNo : {
        type:String,
        required:true //back end validaion
    },
    handoverDate:{
        type:String,
        required:true
    },
    reason:{
        type: String,
        required:false
    }

})

autoIncrement.initialize(mongoose.connection);
postponedSchema.plugin(autoIncrement.plugin, 'user');

const Postponed = mongoose.model("Postponed",postponedSchema);//document name(table)

module.exports = Postponed;