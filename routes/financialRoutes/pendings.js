const router = require("express").Router();
const { request } = require("express");
let pending = require("../../models/financialModels/pending")


router.route("/add").post((req, res)=>{

     const month = req.body.month;
     const billName = req.body.billName;


     const newpending = new pending({

        month,
        billName
     })

     newpending.save().then(()=>{
         res.json("Pending Added")
     }).catch((err)=>{
         console.log(err);
     })


})



router.route("/").get((req, res)=>{

    pending.find().then((pendings)=>{
        res.json(pendings)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:month").put(async(req, res)=>{

    let getmonth = req.params.month;
    const {month, billName} = req.body;

        const updatebillName = {
            billName
        }

    const update = await pending.findOneAndUpdate(getmonth, updatebillName)
    .then(()=>{
    res.status(200).send({status: "Pending list updated !"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updatating Pending list"});
    })
})

router.route("/delete/:month").delete(async(req, res)=>{

    let getmonth = req.params.month;

    await pending.findOneAndDelete(getmonth)
    .then(()=>{
        res.status(200).send({status: "Pending list Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting pending list!",error: err.message});
    })
})

router.route("/get/:month").get(async(req, res)=>{
    let mon = req.params.month;
    const monthlybill = await pending.findOne({month:mon})
    .then((pendings)=>{
        res.status(200).send({status: "Pending fetched",pendings});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get pendings", error: err.message});
    })
})

module.exports = router;