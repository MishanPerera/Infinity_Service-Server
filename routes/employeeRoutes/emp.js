const router = require("express").Router();
let Employee = require("../../models/employeeModels/Employee");


//create
router.route ("/add").post((req,res) => {

    const empNo = req.body.empNo;
    const name = req.body.name;
    const dob = req.body.dob;
    const age = Number(req.body.age);
    const nic = req.body.nic;
    const gender = req.body.gender;
    const phoneNo = req.body.phoneNo;
    const address = req.body.address;
    const email= req.body.email;
    const joinDate= req.body.joinDate;
    const jobTitle = req.body.jobTitle;
    const basicSalary = Number(req.body.basicSalary);


    const newEmployee = new Employee ({

        empNo,
        name,
        dob,
        age,
        nic,
        gender,
        phoneNo,
        address,
        email,
        joinDate,
        jobTitle,
        basicSalary

    })

    newEmployee.save().then(() =>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{

    Employee.find().then((emp)=>{
        res.json(emp)
    }).catch((err)=>{
        console.log(err)
        
    })

})

//update

router.route("/update/:empNo").put(async(req,res)=>{
    let employeeId = req.params.empNo;
    const {empNo,name,dob, age,nic, gender,phoneNo,address,email,joinDate,jobTitle,basicSalary} = req.body;

    const updateEmployee = {
        empNo,
        name,
        dob,
        age,
        nic,
        gender,
        phoneNo,
        address,
        email,
        joinDate,
        jobTitle,
        basicSalary
    }

    const update = await Employee.findOneAndUpdate({empNo:employeeId},updateEmployee)
    .then(()=>{
res.status(200).send ({status:"user updated"})

}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data", error: err.message});
})

})

//delete record
router.route("/delete/:empNo").delete(async (req, res) => {
    let employeeId = req.params.empNo;
    
    await Employee.findOneAndDelete({empNo:employeeId}).then(()=>{
        res.status(200).send({status:"record deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete record",error:err.message});
    })
    })

    //search
router.route("/get/:empNo").get(async(req,res)=>{
    let employeeId =req.params.empNo;
    const user = await Employee.findOne({empNo:employeeId})
    .then((emp)=> {
        res.status(200).send({status:"user fetched",emp})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});

    })

})



module.exports = router;
