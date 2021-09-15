const router = require("express").Router();

let Facility = require("../../models/serviceModels/ServiceFacility");

//CREATE
router.route("/add").post((req,res)=> {
    const serviceType= req.body.serviceType;
    const facilityName= req.body.facilityName;
    const facilityCost = Number(req.body.facilityCost);

    const newFacility = new Facility({
        serviceType,
        facilityName,
        facilityCost
    })

    newFacility.save().then(()=>{
        res.json("The Service Facility is added to the system successfully!")
    }).catch((err)=>{
        console.log(err)
    })

})

//READ
router.route("/").get((req,res)=>{
    Facility.find().then((facilities)=>{
        res.json(facilities)
    }).catch((err)=>{
        console.log(err)
    })
})

//UPDATE
router.route("/update/:fid").put(async(req,res)=>{
    let fId = req.params.fid;
    
    const{serviceType,
        facilityName,
        facilityCost}=req.body;
 
    const updateFacility = {
        serviceType,
        facilityName,
        facilityCost
    }
 
    const update =  await Facility.findByIdAndUpdate(fId,updateFacility).then(()=>{
        res.status(200).send({status: "Facility Cost Updated!"})

    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data...", error: err.message})
    })

})

//DELETE
router.route("/delete/:fid").delete(async(req,res)=>{
    let fId= req.params.fid;

    await Facility.findByIdAndDelete(fId).then(()=>{
        res.status(200).send({status: "Service Facility is deleted!"})

    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({status: "Error with deleting Service Facility...", error: err.message})
    })
})

module.exports = router;