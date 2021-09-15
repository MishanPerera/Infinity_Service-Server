const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pendingSchema = new Schema({

   month : {
       type : String,
       required : true
   },

   billName : {
       type : String,
       required : true
   }
})

const pending = mongoose.model("pending_list", pendingSchema);

module.exports = pending;