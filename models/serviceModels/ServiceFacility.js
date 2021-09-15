const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema

const facilitySchema =  new Schema({
    serviceType:{
        type:String,
        required:true
    },

    facilityName:{
        type:String,
        required:true
    },

    facilityCost:{
        type:Number,
    }
})
autoIncrement.initialize(mongoose.connection);
facilitySchema.plugin(autoIncrement.plugin,'Facility');

const Facility = mongoose.model("Facility",facilitySchema);

module.exports = Facility;