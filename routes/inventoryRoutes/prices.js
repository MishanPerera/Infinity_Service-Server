const router = require("express").Router();
const inventory = require("../../models/inventoryModels/inventory");
let price = require("../../models/inventoryModels/price")

router.route("/add").post((req, res)=>{

    const itemNo = req.body.itemNo;
    const category = req.body.category;
    const name = req.body.name;
    const brand = req.body.brand;
    const sellingPrice =Number( req.body.sellingPrice);

    const newprice = new price({

        itemNo,
        category,
        name,
        brand,
        sellingPrice
     })

     newprice.save().then(()=>{
        res.json("Selling Price Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req, res)=>{

    price.find().then((prices)=>{
        res.json(prices)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:itemNo").get(async(req, res)=>{
    let itemnum = req.params.itemNo;
    const sellingprice = await price.findOne({itemNo:itemnum})
    .then((price)=>{
        res.status(200).send({status: "selling Price fetched",price});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get selling Price", error: err.message});
    })
})


router.route("/update/:itemNo").put(async(req, res)=>{

    let itemnum = req.params.itemNo;
    const {sellingPrice} = req.body;

        const updatePrice = {
            sellingPrice
        }

    const update = await price.findOneAndUpdate({itemNo:itemnum}, updatePrice)
    .then(()=>{
    res.status(200).send({status: "Selling price updated !"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})

router.route("/delete/:itemNo").delete(async(req,res)=>{

    let itemnum = req.params.itemNo;

   const Delete = await price.findOneAndDelete({itemNo:itemnum})
    .then(()=>{
        res.status(200).send({status: "Item Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete item!",error: err.message});
    })
})

module.exports = router;