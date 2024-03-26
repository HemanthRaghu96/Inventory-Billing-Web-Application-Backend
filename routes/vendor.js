const express = require("express");
const router = new express.Router();
const {
  addVendor,
  getAllVendor,
  editVendor,
  deleteVendor,
  getSelectedVendor,
} = require("../controllers/vendor");
//Add vendor
router.post("/addvendor", addVendor);
//Get all vendor
router.get("/getallvendor", getAllVendor);
//Get Selected vendor
router.get("/getselectedvendor/:vendorid", getSelectedVendor);
//Edit vendor
router.put("/editvendor/:vendorid", editVendor);
//Delete vendor
router.delete("/deletevendor/:vendorid", deleteVendor);
module.exports = router;
