const router = require("express").Router();
let Progress = require("../../models/progressModels/Todolist");



//implement view method
router.route("/service/:entryDate").get(async (req, res)=>{
    let dates= req.params.entryDate;

    const dstates = await Progress.find({entryDate:dates})
    .then((statues) =>{
        res.status(200).send({status:"data fetched",statues});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetch user",error:err.mrssage});
    })
})

    
    module.exports = router;