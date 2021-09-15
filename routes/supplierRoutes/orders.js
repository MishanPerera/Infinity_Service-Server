const router = require("express").Router();
let Order = require("../../models/supplierModels/Order");

router.route("/add").post((req,res)=>{

    const orderNo = req.body.orderNo;
    const supplierNo = req.body.supplierNo;
    const orderDate = req.body.orderDate;
    const itemCodes = req.body.itemCodes;
    const cost = req.body.cost;
    const paymentDate = req.body.paymentDate;

    const newOrder = new Order({

        orderNo,
        supplierNo,
        orderDate,
        itemCodes,
        cost,
        paymentDate
    })

    newOrder.save().then(()=>{
        res.json("Order Details Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:supplierNo").put(async (req,res) => {
    let supplierCode = req.params.supplierNo;
    const {orderDate,itemCodes,cost,paymentDate} =req.body;

    const updateOrder = {
        orderDate,
        itemCodes,
        cost,
        paymentDate
    }

    const update = await Order.findOneAndUpdate({supplierNo : supplierCode}, updateOrder)
    .then(() => {
    res.status(200).send({status: "Order Details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:supplierNo").delete(async (req,res) => {
    let userid = req.params.supplierNo;

    await Order.findOneAndDelete({supplierNo:userid})
    .then(() => {
        res.status(200).send({status: "order delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete order", error: err.message});
    })
})

router.route("/get/:supplierNo").get(async (req, res) =>{
    let supplierCode = req.params.supplierNo;
    const user = await Order.findOne({supplierNo:supplierCode}) 
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get order Details", error: err.message});
    })

})

module.exports = router;