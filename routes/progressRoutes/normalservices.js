const router = require("express").Router();

let NormalService = require("../models/NormalService");

//implement view method
router.route("/service").get((req,res)=>{
    NormalService.find().then((todolist)=>{
        res.json(todolist)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;