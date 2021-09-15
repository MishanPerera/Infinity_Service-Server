const router = require("express").Router();
const { request } = require("express");
let availability = require("../../models/inventoryModels/availability")

router.route("/add").post((req, res)=>{

    const itemNo = req.body.itemNo;
    const category = req.body.category;
    const name = req.body.name;
    const brand = req.body.brand;
    const date = req.body.date;
    const itemAvailability = Number(req.body.quantity);
   

    const newavailability = new availability({

       itemNo,
       category,
       name,
       brand,
       date,
       itemAvailability
    })

    newavailability.save().then(()=>{
        res.json("Stock Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/get/:itemNo").get(async(req, res)=>{
    let itemnum = req.params.itemNo;
    const getAvailability = await availability.find({itemNo:itemnum})
    .then((count)=>{
        res.status(200).send({status: "Quantity fetched",count});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get Quantity", error: err.message});
    })
})

router.route("/update/:itemNo").put(async(req, res)=>{

    let itemnum = req.params.itemNo;
    const {itemAvailability} = req.body;

        const updateAvailability = {
            itemAvailability
        }

    const update = await availability.findOneAndUpdate({itemNo:itemnum}, updateAvailability)
    .then(()=>{
    res.status(200).send({status: "Quantity updated !"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating quantity", error: err.message});
    })
})

module.exports = router;