const router = require("express").Router();
const { request } = require("express");
let utility = require("../../models/financialModels/utility")

router.route("/add").post((req, res)=>{

    const date = req.body.date;
    const electricity = req.body.electricity;
    const water = req.body.water;
    const telephone = req.body.telephone;
    const repair = req.body.repair;
    const billTotal = Number(req.body.billTotal);

    const newutility = new utility({

        date,
        electricity,
        water,
        telephone,
        repair,
        billTotal
    })

    newutility.save().then(()=>{
        res.json("Utility Added")
    }).catch((err)=>{
        console.log(err);
    })


})

module.exports = router;