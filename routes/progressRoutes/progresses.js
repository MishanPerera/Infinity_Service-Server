const router = require("express").Router();
let Progress = require("../../models/progressModels/Progress");

//call create method
router.route("/add").post((req,res)=>{

    //request(front end data) values get backend
    const vNo = req.body.vNo;
    const entryDate =req.body.entryDate;
    const empNo = req.body.empNo;
    const handoverDate = req.body.handoverDate;
    const status = req.body.status;
    

    const newProgress = new Progress({
        //initialize the properties
        vNo,
        entryDate,
        empNo,
        handoverDate,
        status
      
        })

    //exception handling
    newProgress.save().then(()=>{
        res.json("Employee Assignment success...")
    }).catch((err)=>{
        console.log(err);
    })

})

//implement view method
router.route("/").get((req,res)=>{
    Progress.find().then((progresses)=>{
        res.json(progresses)
    }).catch((err)=>{
        console.log(err);
    })
})

//update method
router.route("/edit/:vNo").put(async(req,res)=>{
    let vehicleId = req.params.vNo;//backend url user id fletch
    const {vNo,entryDate,empNo,handoverDate,status}= req.body;//destructure

    const updateStatus = {
        vNo,
        entryDate,
        empNo,
        handoverDate,
        status
        
    }

    const update = await Progress.findOneAndUpdate({vNo:vehicleId},updateStatus)
    .then(()=>{
    //pass the updated data
    res.status(200).send({status:"Status updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data......",error:err.message});
    })
})

//delete record
router.route("/delete/:vNo").delete(async (req, res) => {
let vehicleNo = req.params.vNo;

await Progress.findOneAndDelete(vehicleNo).then(()=>{
    res.status(200).send({status:"record deleted"});
}).catch((err)=>{
console.log(err.message);
res.status(500).send({status:"Error with delete record",error:err.message});
})
})

//get once user data-search
router.route("/search/:vNo").get(async (req, res)=>{
    let vehicleId =req.params.vNo;

    const Vstatus = await Progress.findOne({vNo:vehicleId})
    .then((progress) =>{
        res.status(200).send({status:"data fetched",progress});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetch user",error:err.mrssage});
    })
})
//implement view method
router.route("/pro/:entryDate").get(async (req, res)=>{
    let dates= req.params.entryDate;

    const dstates = await Progress.find({entryDate:dates})
    .then((daily) =>{
        res.status(200).send({status:"data fetched",daily});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetch user",error:err.mrssage});
    })
})

module.exports = router;
