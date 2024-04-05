const PurchaseOrder = require("../models/purchaseorderSchema");

//Add purchaseorder

async function addPurchaseorder(req, res) {
  const {
    vendorname,
    purchaseorder,
    date,
    shipmentdate,
    totalamount,
    items,
    shipmentingcharges,
    customernote,
  } = req.body;
  console.log(req.body);
  if (!vendorname || !purchaseorder || !date || !items) {
    return res.status(422).json({ error: "fill all the details" });
  }
  try {
    const prepurchaseorder = await PurchaseOrder.findOne({ vendorname: vendorname });

    if (prepurchaseorder) {
      return res.status(422).json({ error: "This purchaseorder is Already Exist" });
    } else {
      const newPurchaseorder = new PurchaseOrder({
        vendorname,
        purchaseorder,
        date,
        shipmentdate,
        totalamount,
        items,
        shipmentingcharges,
        customernote,
      });

      const savedPurchaseorder = await newPurchaseorder.save();
      return res.status(201).json({ status: 201, savedPurchaseorder });
    }
  } catch (error) {
    console.log("catch block error",error);
    return res.status(422).json(error);
   
  }
}

//Get all Purchaseorders

async function getAllPurchaseorder(req, res) {
  try {
    const allPurchaseorders = await PurchaseOrder.find();
    res.status(201).json({ status: 201, allPurchaseorders });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedPurchaseorder(req, res) {
  const purchaseorderId = req.params.purchaseorderid;
  try {
    const selectedPurchaseorders = await PurchaseOrder.find({ _id: purchaseorderId });
    res.status(201).json({ status: 201, selectedPurchaseorders });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editPurchaseorders(req, res) {
  const purchaseorderId = req.params.purchaseorderid;
  console.log(purchaseorderId);
  const {
    vendorname,
    purchaseorder,
    date,
    shipmentdate,
    totalamount,
    items,
    shipmentingcharges,
    customernote,
  } = req.body;

  try {
    const updatedPurchaseorder = await PurchaseOrder.findByIdAndUpdate(
      purchaseorderId,
      {
        $set: {
            vendorname,
            purchaseorder,
            date,
            shipmentdate,
            totalamount,
            items,
            shipmentingcharges,
            customernote,
        },
      },
      { new: true }
    );

    if (!updatedPurchaseorder) {
      return res.status(404).json({ error: "Purchaseorder not found" });
    }

    res.status(200).json({ status: 200, updatedPurchaseorder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deletePurchaseorders(req, res) {
  const purchaseorderId = req.params.purchaseorderid;

  try {
    const deletedPurchaseorder = await PurchaseOrder.findByIdAndDelete(purchaseorderId);

    if (!deletedPurchaseorder) {
      return res.status(404).json({ error: "Purchaseorder not found" });
    }

    res.status(200).json({ status: 200, deletedPurchaseorder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addPurchaseorder,
  getAllPurchaseorder,
  editPurchaseorders,
  deletePurchaseorders,
  getSelectedPurchaseorder,
};
