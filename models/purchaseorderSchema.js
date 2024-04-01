// Import necessary modules

const mongoose = require("mongoose");

// Mongoose purchaseorderSchema
const purchaseorderSchema = new mongoose.Schema({
  vendorname: {
    type: String,
    required: true,
  },
  purchaseorder: {
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

const PurchaseOrder  = new mongoose.model("PurchaseOrder", purchaseorderSchema);
module.exports = PurchaseOrder ;
