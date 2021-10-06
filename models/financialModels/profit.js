const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const profitSchema = new Schema({

    date : {
        type : String,
        required : true
    },

    income : {
        type : String,
        required : true
    },


    orderCost : {
        type : String,
        required : true
    },

    salary : {
        type : String,
        required : true
    },

    otherExpenses : {
        type : String,
        required : true
    },

    totalProfit : {
        type : Number,
        required : true
    }
  
 })

 const profit = mongoose.model("profit", profitSchema);

 module.exports = profit;