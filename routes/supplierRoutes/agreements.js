
const router = require("express").Router();
let Agreement = require("../../models/supplierModels/Agreement"); 

router.route("/add").post((req,res)=>{

    const supplierNo = req.body.supplierNo;
    const companyName = req.body.companyName;
    const agreeDate = req.body.agreeDate;
    const validTimePeriod = req.body.validTimePeriod;
    const itemDetails = req.body.itemDetails;

    const newAgreement = new Agreement({

        supplierNo,
        companyName,
        agreeDate,
        validTimePeriod,
        itemDetails
    })

    newAgreement.save().then(()=>{
        res.json("Agreement Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Agreement.find().then((agreements)=>{
        res.json(agreements)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/edit/:supplierNo").put(async (req,res) => {
    let userid = req.params.supplierNo;
    const {supplierNo, companyName, agreeDate, validTimePeriod, itemDetails} =req.body;

    const updateAgreement = {
        validTimePeriod,
        itemDetails
    }

    const update = await Agreement.findOneAndUpdate({supplierNo : userid}, updateAgreement)
    .then(() => {
    res.status(200).send({status: "Agreement Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:supplierNo").delete(async (req,res) => {
    let userid = req.params.supplierNo;

    await Agreement.findOneAndDelete({supplierNo:userid})
    .then(() => {
        res.status(200).send({status: "Agreement delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Agreement", error: err.message});
    })
})

router.route("/get/:supplierNo").get(async (req, res) =>{
    let supplierCode = req.params.supplierNo;
    const user = await Agreement.findOne({supplierNo:supplierCode}) 
    .then((user) => {
        res.status(200).send({status: "Agreement fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Agreement", error: err.message});
    })

})

module.exports = router;