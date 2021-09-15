const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agreementSchema = new Schema({
    
    supplierNo : {
        type : String,
        required: true
    },
    companyName:{
        type : String,
        required: true
    },
    agreeDate:{
        type : String,
        required: true
    },
    validTimePeriod:{
        type : String,
        required: true
    },
    itemDetails:{
        type : String,
        required: true
    }

})

const Agreement = mongoose.model("Agreementdetails",agreementSchema);

module.exports = Agreement;