// Import necessary modules

const mongoose = require("mongoose");

// Mongoose customerSchema
const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    required: true,
  },
  billingaddress: {
    type: Object,
  },
  billingcountry: {
    type: String,
  },
  billingcity: {
    type: String,
  },
  billingstate: {
    type: String,
  },
  billingpincode: {
    type: String,
    required: true,
  },
  shippingaddress: {
    type: String,
    required: true,
  },
  shippingcountry: {
    type: String,
  },
  shippingcity: {
    type: String,
    required: true,
  },
  shippingstate: {
    type: String,
    required: true,
  },
  shippingpincode: {
    type: String,
  },
});

const Customer = new mongoose.model("Customer", customerSchema);
module.exports = Customer;
