const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const paymentSchema = new Schema({

    handoverDate : {
        type : String,
        required : true
    },

    vNo : {
        type : String,
        required : true
    },


    cusName : {
        type : String,
        required : true
    },

    amount : {
        type : Number,
        required : true
    }
  
 })

 const payment = mongoose.model("payment", paymentSchema);

 module.exports = payment;