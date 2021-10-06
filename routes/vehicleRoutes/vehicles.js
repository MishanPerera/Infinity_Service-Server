const router = require("express").Router();
let Vehicle = require("../../models/vehicleModels/Vehicle");

//add vehicle details
router.route("/add").post((req,res)=>{
    const vNo = req.body.vNo;
    const chasNo = req.body.chasNo;
    const nic = req.body.nic;
    const color = req.body.color;
    const model = req.body.model;
    const brand = req.body.brand;
    const engOil = req.body.engOil;
    const hybrid = req.body.hybrid;
    const lsMileage = req.body.lsMileage;
    const lsDate = req.body.lsDate;
    const entryDate = req.body.entryDate;

    const newVehicle = new Vehicle({
        vNo,
        chasNo,
        nic,
        color,
        model,
        brand,
        engOil,
        hybrid,
        lsMileage,
        lsDate,
        entryDate
    })

    newVehicle.save()
    .then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch
router.route("/").get((req, res) => {
    Vehicle.find().then((vehicles) => {
        res.json(vehicles)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:vNo").put(async (req, res)=>{
    let vNum = req.params.vNo;
    const {lsMileage, lsDate} = req.body;

    const updateVehicle = {
        lsMileage,
        lsDate
    }

    const update = await Vehicle.findOneAndUpdate({vNo:vNum}, updateVehicle).then(()=>{
        res.status(200).send({status: "Vehicle updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//delete
router.route("/delete/:vNo").delete(async (req, res)=>{
    let vNum = req.params.vNo;

    await Vehicle.findOneAndDelete({vNo:vNum}).then(()=> {
        res.status(200).send({status: "Vehicle deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete vehicle", error: err.message});
    })
})

//search details
router.route("/get/:vNo").get(async (req, res)=>{
    let vNum = req.params.vNo;

    const vehi = await Vehicle.findOne({vNo:vNum})
    .then((vehicle)=>{
        res.status(200).send({status: "Vehicle fetched", vehicle})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get vehicle", error: err.message})
    })
})

//search vehicles
router.route("/get/:nic").get(async (req, res)=>{
    let vNIC = req.params.nic;

    const vehic = await Vehicle.findOne({nic:vNIC})
    .then((vehicle)=>{
        res.status(200).send({status: "Vehicle fetched", vehicle})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get vehicle", error: err.message})
    })
})

module.exports = router;