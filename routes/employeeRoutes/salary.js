const router = require("express").Router();
let Salary = require("../../models/employeeModels/Salary");

//create
router.route ("/add").post((req,res) => {


    const year = Number(req.body.year);
    const month = req.body.month;
    const empNo = req.body.empNo;
    const empName = req.body.empName;
    const basicSalary = Number(req.body.basicSalary);
    const otHours = Number(req.body.otHours);
    const otRate = Number(req.body.otRate);
    const bonus= Number(req.body.bonus);
    const total = Number(req.body.total);

    const newSalary = new Salary ({
        year,
        month,
        empNo,
        empName,
        basicSalary,
        otHours,
        otRate,
        bonus,
        total

    })

    newSalary.save().then(() =>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })


})


router.route("/").get((req,res)=>{

    Salary.find().then((salary)=>{
        res.json(salary)
    }).catch((err)=>{
        console.log(err)
        
    })

})


//search
router.route("/get/:empNo").get(async(req,res)=>{
    let employeeno =req.params.empNo;
    const user = await Salary.findOne({empNo:employeeno})
    .then((salary)=> {
        res.status(200).send({status:"user fetched",salary})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});

    })

})

module.exports = router;
