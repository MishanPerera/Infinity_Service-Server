const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    
    empNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dob :{
        type:String,
        required:true
    },

     age :{
        type:Number,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    gender :{
        type:String,
        required:true
    },
    phoneNo :{
        type:String,
        required:true
    },

    address :{
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true
    },

    joinDate :{
        type:String,
        required:true
    },

    jobTitle :{
        type:String,
        required:true
    },

    basicSalary :{
        type:Number,
        required:true
    }

})

const Employee = mongoose.model("Employee",empSchema);
module.exports = Employee;

