const express = require("express");
const router = new express.Router();
const {addItem,getAllItem} = require("../controllers/item");
//Add item
router.post("/additems", addItem);
//Get all item
router.get("/getallitems", getAllItem);

module.exports = router;
