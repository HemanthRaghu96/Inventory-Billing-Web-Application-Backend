const express = require("express");
const router = new express.Router();
const {
  addPurchaseorder,
  getAllPurchaseorder,
  editPurchaseorders,
  getSelectedPurchaseorder,
  deletePurchaseorders,
} = require("../controllers/purchaseorder");
//Add purchaseorder
router.post("/addpurchaseorder", addPurchaseorder);
//Get all purchaseorder
router.get("/getallpurchaseorder", getAllPurchaseorder);
//Get Selected purchaseorder
router.get("/getselectedpurchaseorder/:purchaseorderid", getSelectedPurchaseorder);
//Edit purchaseorder
router.put("/editpurchaseorder/:purchaseorderid", editPurchaseorders);
//Delete purchaseorder
router.delete("/deletepurchaseorder/:purchaseorderid", deletePurchaseorders);
module.exports = router;
