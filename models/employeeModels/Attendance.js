const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    empNo:{
        type:String,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    }
})

const Attendance= mongoose.model("Attendance",attendanceSchema);
module.exports = Attendance;


    