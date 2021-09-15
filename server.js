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

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})