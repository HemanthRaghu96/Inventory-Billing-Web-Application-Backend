const express = require("express");
const router = new express.Router();
const {
  addCustomer,
  getAllCustomer,
  editCustomer,
  deleteCustomer,
  getSelectedCustomer,
} = require("../controllers/customer");
//Add customer
router.post("/addcustomer", addCustomer);
//Get all customer
router.get("/getallcustomer", getAllCustomer);
//Get Selected customer
router.get("/getselectedcustomer/:customerid", getSelectedCustomer);
//Edit customer
router.put("/editcustomer/:customerid", editCustomer);
//Delete customer
router.delete("/deletecustomer/:customerid", deleteCustomer);
module.exports = router;
