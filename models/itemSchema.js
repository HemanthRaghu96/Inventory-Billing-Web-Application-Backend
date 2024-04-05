// Import necessary modules

const mongoose = require("mongoose");

// Mongoose itemSchema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
  },
  unit: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  upc: {
    type: String,
  },
  ean: {
    type: String,
  },
  weight: {
    type: String,
  },
  brand: {
    type: String,
  },
  mpn: {
    type: String,
  },
  isbn: {
    type: String,
  },
  sellingprice: {
    type: String,
    required: true,
  },
  salesaccount: {
    type: String,
  },
  salesdescription: {
    type: String,
  },
  costprice: {
    type: String,
    required: true,
  },
  purchaseaccount: {
    type: String,
  },
  purchasedescription: {
    type: String,
  },
});

const Item  = new mongoose.model("Item ", itemSchema);
module.exports = Item ;
