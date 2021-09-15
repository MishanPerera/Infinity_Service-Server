const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    
    supplierNo : {
        type : String,
        required: true
    },
    companyName:{
        type : String,
        required: true
    },
    address:{
        type : String,
        required: true
    },
    companyEmail:{
        type : String,
        required: true
    },
    comPhone:{
        type : String,
        required: true
    },
    agentName:{
        type : String,
        required: true
    },
    agentPhone:{
        type : String,
        required: true
    },
    agentEmail:{
        type : String,
        required: true
    }

})

const supplier = mongoose.model("Supplierdetails",supplierSchema);

module.exports = supplier;