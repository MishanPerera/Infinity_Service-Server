const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const utilitySchema = new Schema({

    date : {
        type : String,
        required : true
    },

    electricity : {
        type : String,
        required : true
    },

    water : {
        type : String,
        required : true
    },

    telephone : {
        type : String,
        required : true
    },

    repair : {
        type : String,
        required :true
    },
    
    billTotal : {
        type : Number,
        required :true
    }

   
 })

 const utility = mongoose.model("utility", utilitySchema);

 module.exports = utility;