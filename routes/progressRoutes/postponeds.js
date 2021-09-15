const router = require("express").Router();
let Postponed = require("../../models/progressModels/Postponed");


//call create method
router.route("/addp").post((req,res)=>{

    //request(front end data) values get backend
    const vNo = req.body.vNo;
    const handoverDate = req.body.handoverDate;
    const reason = req.body.reason;
  

    const newPostponed = new Postponed({
        //initialize the properties
        vNo,
        handoverDate, 
        reason

        })

    //exception handling
    newPostponed.save().then(()=>{
        res.json("Service Postponed success...")
    }).catch((err)=>{
        console.log(err);
    })

})

//implement view method
router.route("/view").get((req,res)=>{
    Postponed.find().then((postponeds)=>{
        res.json(postponeds)
    }).catch((err)=>{
        console.log(err.message);
    })
})

//update method
router.route("/update/:vNo").put(async(req,res)=>{
    let vehicleNo = req.params.vNo;//backend url user id fletch
    const {vNo,handoverDate,reason}= req.body;//destructure

    const updateStatus = {
        vNo,
        handoverDate,
        reason
    }

    const update = await Postponed.findOneAndUpdate(vehicleNo,updateStatus).then(()=>{
    //pass the updated data
    res.status(200).send({status:"Reason updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data......",error:err.message});
    })
})

//delete record
router.route("/delete/:vNo").delete(async (req, res) => {
let vehicleNo = req.params.vNo;

await Postponed.findOneAndDelete({vNo:vehicleNo}).then(()=>{
    res.status(200).send({status:"record deleted"});
}).catch((err)=>{
console.log(err.message);
res.status(500).send({status:"Error with delete record",error:err.message});
})
})

//get once user data-search
router.route("/get/:vNo").get(async (req, res)=>{
    let vehicleNo =req.params.vNo;

    const user = await Postponed.findOne({vNo:vehicleNo})
    .then((postpone) =>{
        res.status(200).send({status:"data fetched",postpone});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetch data",error:err.mrssage});
    })
})

module.exports = router;