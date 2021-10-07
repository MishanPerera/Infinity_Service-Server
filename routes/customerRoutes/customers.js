const router = require("express").Router();
let Customer = require("../../models/customerModels/Customer");

router.route("/add").post((req,res) => {

    const nic = req.body.nic;
    const first_name = req.body.first_name;
    const last_name =req.body.last_name;
    const phone_number = req.body.phone_number;
    const gender = req.body.gender;
    const date = req.body.date;
    const address = req.body.address;
    const email = req.body.email;
    
    const newCustomer = new Customer({
        nic,
        first_name,
        last_name,
        phone_number,
        gender,
        date,
        address,
        email
       
    })
    //add
    newCustomer.save().then(() => {
        res.json("Customer Added")
    }).catch((err) => {
        console.log(err);
    })
})

//fetch
router.route("/").get((req,res) => {
    Customer.find().then((customers) => {
        res.json(customers)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:nic").put(async (req, res) => {
    let cusNic = req.params.nic;
    const {nic, first_name, last_name, phone_number, gender, date, address, email} =req.body;

    const updateCustomer = {
        nic,
        first_name,
        last_name,
        phone_number,
        gender,
        date,
        address,
        email
    }
    const update = await Customer.findOneAndUpdate({nic:cusNic}, updateCustomer)
        .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
})


//delete
router.route("/delete/:nic").delete(async (req, res) => {
    let cusNic = req.params.nic;

    await Customer.findOneAndDelete({nic:cusNic}).then(() => {
        res.status(200).send({status: "User deleted"});
        }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


//search
router.route("/get/:nic").get(async (req, res) => {
    let cusNic = req.params.nic;

    const user = await Customer.findOne({nic:cusNic})
    .then((customer) => {
        res.status(200).send({status: "User fetched", customer})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})
module.exports = router;