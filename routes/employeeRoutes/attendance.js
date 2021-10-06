const router = require("express").Router();
let Attendance = require("../../models/employeeModels/Attendance");

//create
router.route ("/add").post((req,res) => {

    const empNo = req.body.empNo;
    const empName = req.body.empName;
    const date = req.body.date;

    const newAttendance = new Attendance ({
        empNo,
        empName,
        date

    })

    newAttendance.save().then(() =>{
        res.json("Attendance Added")
    }).catch((err)=>{
        console.log(err);
    })


})


router.route("/").get((req,res)=>{

    Attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err)
        
    })

})


//search
router.route("/get/:empNo").get(async(req,res)=>{
    let employeeId =req.params.empNo;
    const user = await Attendance.findOne({empNo:employeeId})
    .then((attendance)=> {
        res.status(200).send({status:"user fetched",attendance})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});

    })

})

module.exports = router;
