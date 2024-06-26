// Import necessary modules

const mongoose = require("mongoose");

// Mongoose invoiceSchema
const invoiceSchema = new mongoose.Schema({
  customername: {
    type: String,
  
  },
  invoice: {
    type: String,
    required: true,
  },
  ordernumber: {
    type: String,
    required: true,
  },
  invoicedate: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
  },
  payment: {
    type: String,
    default:"UNPAID",
  },
  totalamount: {
    type: Number,
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

const Invoice  = new mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice ;
