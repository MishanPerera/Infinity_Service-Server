const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenev = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection

connection.once("open", () => {
    console.log("MongoDB Connection Success!!!")
})

//service
const facilityRouter = require("./routes/serviceRoutes/facilities.js")
app.use("/facility",facilityRouter);

const normalServiceRouter = require("./routes/serviceRoutes/normalservices.js")
app.use("/nservice",normalServiceRouter);

const fullServiceRouter = require("./routes/serviceRoutes/fullservices.js")
app.use("/fservice",fullServiceRouter);

//inventory

const inventoryRouter = require("./routes/inventoryRoutes/inventories.js");

app.use("/inventory",inventoryRouter);

const priceRouter = require("./routes/inventoryRoutes/prices.js");

app.use("/price",priceRouter);

const availabilityRouter = require("./routes/inventoryRoutes/availabilities.js");

app.use("/availability",availabilityRouter);

//work progress
//variable declaration and import model file
const progressRouter = require("./routes/progressRoutes/progresses.js");
app.use("/progress",progressRouter);
const postponeRouter = require("./routes/progressRoutes/postponeds.js");
app.use("/postpone",postponeRouter);



//employee 
const empRouter = require("./routes/employeeRoutes/emp.js");
const attendanceRouter = require("./routes/employeeRoutes/attendance.js");
const salaryRouter = require("./routes/employeeRoutes/salary.js");


app.use("/employee",empRouter);
app.use("/attendance",attendanceRouter);
app.use("/salary",salaryRouter);

//financial
const paymentRouter = require("./routes/financialRoutes/payments.js");

app.use("/payment",paymentRouter);

const pendingRouter = require("./routes/financialRoutes/pendings.js");

app.use("/pending",pendingRouter);

const utilityRouter = require("./routes/financialRoutes/utilities.js");

app.use("/utility",utilityRouter);

const profitRouter = require("./routes/financialRoutes/profits.js");

app.use("/profit",profitRouter);

//supplier
const supplierRouter = require("./routes/supplierRoutes/suppliers.js");

app.use("/supplier",supplierRouter);

const agreementRouter = require("./routes/supplierRoutes/agreements.js");

app.use("/agreement",agreementRouter);

const orderRouter = require("./routes/supplierRoutes/orders.js");

app.use("/order",orderRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})