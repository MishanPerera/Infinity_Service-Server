const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const availabilitySchema = new Schema({

    itemNo : {
        type : String,
        required : true
    },


    category : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    brand : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required :true
    },

    itemAvailability : {
        type : Number,
        required :true
    }

   
 })

 const availability = mongoose.model("stock_availability", availabilitySchema);

 module.exports = availability;