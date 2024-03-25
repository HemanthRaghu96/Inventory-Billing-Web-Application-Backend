const express = require("express");
const router = new express.Router();
const {
  addItem,
  getAllItem,
  editItems,
  getSelectedItem,
  deleteItems,
} = require("../controllers/item");
//Add item
router.post("/additems", addItem);
//Get all item
router.get("/getallitems", getAllItem);
//Get Selected item
router.get("/getselecteditems/:itemid", getSelectedItem);
//Edit item
router.put("/edititems/:itemid", editItems);
//Delete item
router.delete("/deleteitems/:itemid", deleteItems);
module.exports = router;
