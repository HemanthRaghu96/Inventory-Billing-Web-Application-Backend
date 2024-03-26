// Import necessary modules

const mongoose = require("mongoose");

// Mongoose billSchema
const billSchema = new mongoose.Schema({
  vendorname: {
    type: String,
    required: true,
  },
  bill: {
    type: String,
    required: true,
  },
  ordernumber: {
    type: String,
    required: true,
  },
  billdate: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
  },
  items: {
    type: JSON,
    required: true,
  },
  shipmentingcharges: {
    type: String,
  },
  termsconditions: {
    type: String,
  },
});

const Bill  = new mongoose.model("Bill", billSchema);
module.exports = Bill ;
