// Import necessary modules

const mongoose = require("mongoose");

// Mongoose salesorderSchema
const salesorderSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  salesorder: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  shipmentdate: {
    type: String,
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
   customernote: {
    type: String,
  },
});

const SalesOrder  = new mongoose.model("SalesOrder", salesorderSchema);
module.exports = SalesOrder ;
