const router = require("express").Router();
const { request } = require("express");
let payment = require("../../models/financialModels/payment")


router.route("/add").post((req, res)=>{

     const handoverDate = req.body.handoverDate;
     const vNo = req.body.vNo;
     const cusName = req.body.cusName;
     const amount = Number(req.body.amount);


     const newpayment = new payment({

        handoverDate,
        vNo,
        cusName,
        amount 
     })

     newpayment.save().then(()=>{
         res.json("Payment Added")
     }).catch((err)=>{
         console.log(err);
     })


})



router.route("/").get((req, res)=>{

    payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:handoverdate").get(async(req, res)=>{
    let getDate = req.params.handoverDate;
    const user = await payment.findOne({handoverDate:getDate})
    .then((user)=>{
        res.status(200).send({status: "Payment set",user});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get payment", error: err.message});
    })
})

module.exports = router;