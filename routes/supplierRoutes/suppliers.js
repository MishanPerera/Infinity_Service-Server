const router = require("express").Router();
let supplier = require("../../models/supplierModels/supplier");

router.route("/add").post((req,res)=>{

    const supplierNo = req.body.supplierNo;
    const companyName = req.body.companyName;
    const address = req.body.address;
    const companyEmail = req.body.companyEmail;
    const comPhone = req.body.comPhone;
    const agentName = req.body.agentName;
    const agentPhone = req.body.agentPhone;
    const agentEmail = req.body.agentEmail;

    const newSupplier = new supplier({

        supplierNo,
        companyName,
        address,
        companyEmail,
        comPhone,
        agentName,
        agentPhone,
        agentEmail
    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:supplierNo").put(async(req,res) => {
    let supplierCode = req.params.supplierNo;
    const {supplierNo, companyName, address, companyEmail, comPhone, agentName, agentPhone, agentEmail} =req.body;

    const updateSupplier = {
        companyEmail,
        comPhone,
        agentName,
        agentPhone,
        agentEmail
    }

    const update = await supplier.findOneAndUpdate({supplierNo : supplierCode}, updateSupplier)
    .then(() => {
    res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:supplierNo").delete(async (req,res) => {
    let userid = req.params.supplierNo;

    await supplier.findOneAndDelete({supplierNo:userid})
    .then(() => {
        res.status(200).send({status: "Supplier delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete supplier", error: err.message});
    })
})

router.route("/get/:supplierNo").get(async (req, res) =>{
    let supplierCode = req.params.supplierNo;
    const user = await supplier.findOne({supplierNo:supplierCode}) 
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get supplier", error: err.message});
    })

})

module.exports = router;


//supplier