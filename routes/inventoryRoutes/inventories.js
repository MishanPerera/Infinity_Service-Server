const router = require("express").Router();
const { request } = require("express");
let inventory = require("../../models/inventoryModels/inventory")


router.route("/add").post((req, res)=>{

     const itemNo = req.body.itemNo;
     const stockNo = req.body.stockNo;
     const category = req.body.category;
     const name = req.body.name;
     const brand = req.body.brand;
     const date = req.body.date;
     const volume = req.body.volume;
     const quantity = Number(req.body.quantity);
     const supplierName = req.body.supplierName;
     const buyingPrice = Number(req.body.buyingPrice);

     const newinventory = new inventory({

        itemNo,
        stockNo,
        category,
        name,
        brand,
        date,
        volume,
        quantity,
        supplierName,
        buyingPrice
     })

     newinventory.save().then(()=>{
         res.json("Stock Added")
     }).catch((err)=>{
         console.log(err);
     })


})



router.route("/").get((req, res)=>{

    inventory.find().then((inventories)=>{
        res.json(inventories)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:itemNo").get(async(req, res)=>{
    let itemCode = req.params.itemNo;
    const supplier = await inventory.findOne({itemNo:itemCode})
    .then((user)=>{
        res.status(200).send({status: "Supplier fetched",user});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get supplier", error: err.message});
    })
})

router.route("/report/:date").get(async(req, res)=>{
    let month = req.params.date;
    const stockreport = await inventory.find({date:month})
    .then((report)=>{
        res.status(200).send({status: "Month fetched",report});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get Month", error: err.message});
    })
})

module.exports = router;