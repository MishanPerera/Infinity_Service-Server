const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    nic : {
        type : String,
        required: true
    },

    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    phone_number : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    }
    
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;