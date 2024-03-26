const express = require("express");
const router = new express.Router();
const {
  addBill,
  getAllBill,
  editBills,
  getSelectedBill,
  deleteBills,
} = require("../controllers/bill");
//Add bill
router.post("/addbill", addBill);
//Get all bill
router.get("/getallbill", getAllBill);
//Get Selected bill
router.get("/getselectedbill/:billid", getSelectedBill);
//Edit bill
router.put("/editbill/:billid", editBills);
//Delete bill
router.delete("/deletebill/:billid", deleteBills);
module.exports = router;
