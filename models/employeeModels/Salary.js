const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    year:{
        type:Number,
        required:true
    },
    month:{
        type:String,
        required:true
    },

    empNo:{
        type:String,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    basicSalary :{
        type:Number,
        required:true
    },

    otHours:{
        type:Number,
        required:true
    },
    otRate:{
        type:Number,
        required:true
    },
    bonus :{
        type:Number,
        required:true
    },

    total :{
        type:Number,
        required:true
    },
    
})

const Salary= mongoose.model("Salary",salarySchema);
module.exports = Salary;


    