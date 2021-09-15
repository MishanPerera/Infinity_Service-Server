const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const inventorySchema = new Schema({

    itemNo : {
        type : String,
        required : true
    },

    stockNo : {
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

    volume : {
        type : String,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },

    supplierName : {
        type : String,
        required : true
    },

    buyingPrice : {
        type : Number,
        required : true
    }
 })

 const inventory = mongoose.model("inventory_stock", inventorySchema);

 module.exports = inventory;