const router = require("express").Router();
const { request } = require("express");
let profit = require("../../models/financialModels/profit")


router.route("/add").post((req, res)=>{

     const date = req.body.date;
     const income = req.body.income;
     const orderCost = req.body.orderCost;
     const otherExpenses = req.body.otherExpenses;
     const salary = req.body.salary;
     const totalProfit = Number(req.body.totalProfit);


     const newprofit = new profit({

        date,
        income,
        orderCost,
        salary,
        otherExpenses,
        totalProfit


     })

     newprofit.save().then(()=>{
         res.json("Profit Added")
     }).catch((err)=>{
         console.log(err);
     })


})



router.route("/").get((req, res)=>{

    profit.find().then((profits)=>{
        res.json(profits)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;