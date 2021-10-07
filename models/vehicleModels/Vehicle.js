const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    vNo: {
        type: String,
        required: true
    },
    chasNo: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    engOil: {
        type: String,
        required: true
    },
    hybrid: {
        type: String,
        required: true
    },
    lsMileage: {
        type: String,
        required: true
    },
    lsDate: {
        type: String,
        required: true
    },
    entryDate: {
        type: String,
        required: true
    }
})

const Vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = Vehicle;