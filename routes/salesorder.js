const express = require("express");
const router = new express.Router();
const {
  addSalesorder,
  getAllSalesorder,
  editSalesorders,
  getSelectedSalesorder,
  deleteSalesorders,
} = require("../controllers/salesorder");
//Add salesorder
router.post("/addsalesorder", addSalesorder);
//Get all salesorder
router.get("/getallsalesorder", getAllSalesorder);
//Get Selected salesorder
router.get("/getselectedsalesorder/:salesorderid", getSelectedSalesorder);
//Edit salesorder
router.put("/editsalesorder/:salesorderid", editSalesorders);
//Delete salesorder
router.delete("/deletesalesorder/:salesorderid", deleteSalesorders);
module.exports = router;
