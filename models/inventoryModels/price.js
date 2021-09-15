 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const priceSchema = new Schema({

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

    sellingPrice : {
        type : Number,
        required : true
    }

 })

 const price = mongoose.model("selling_price", priceSchema);

 module.exports = price;