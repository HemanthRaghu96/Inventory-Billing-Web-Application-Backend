const express = require("express");
const router = new express.Router();
const {
  addInvoice,
  getAllInvoice,
  editInvoices,
  getSelectedInvoice,
  deleteInvoices,
} = require("../controllers/invoice");
//Add invoice
router.post("/addinvoice", addInvoice);
//Get all invoice
router.get("/getallinvoice", getAllInvoice);
//Get Selected invoice
router.get("/getselectedinvoice/:invoiceid", getSelectedInvoice);
//Edit invoice
router.put("/editinvoice/:invoiceid", editInvoices);
//Delete invoice
router.delete("/deleteinvoice/:invoiceid", deleteInvoices);
module.exports = router;
