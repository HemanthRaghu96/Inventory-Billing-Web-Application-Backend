const SalesOrder = require("../models/salesorderSchema");

//Add salesorder

async function addSalesorder(req, res) {
  const {
    customername,
    salesorder,
    date,
    shipmentdate,
    items,
    shipmentingcharges,
    customernote,
  } = req.body;
  console.log(req.body);
  if (!customername || !salesorder || !date || !items) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const presalesorder = await SalesOrder.findOne({ customername: customername });

    if (presalesorder) {
      res.status(422).json({ error: "This salesorder is Already Exist" });
    } else {
      const newSalesorder = new SalesOrder({
        customername,
        salesorder,
        date,
        shipmentdate,
        items,
        shipmentingcharges,
        customernote,
      });

      const savedSalesorder = await newSalesorder.save();
      res.status(201).json({ status: 201, savedSalesorder });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error",error);
  }
}

//Get all Salesorders

async function getAllSalesorder(req, res) {
  try {
    const allSalesorders = await SalesOrder.find();
    res.status(201).json({ status: 201, allSalesorders });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedSalesorder(req, res) {
  const salesorderId = req.params.salesorderid;
  try {
    const selectedSalesorders = await SalesOrder.find({ _id: salesorderId });
    res.status(201).json({ status: 201, selectedSalesorders });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editSalesorders(req, res) {
  const salesorderId = req.params.salesorderid;
  console.log(salesorderId);
  const {
    customername,
    salesorder,
    date,
    shipmentdate,
    items,
    shipmentingcharges,
    customernote,
  } = req.body;

  try {
    const updatedSalesorder = await SalesOrder.findByIdAndUpdate(
      salesorderId,
      {
        $set: {
            customername,
            salesorder,
            date,
            shipmentdate,
            items,
            shipmentingcharges,
            customernote,
        },
      },
      { new: true }
    );

    if (!updatedSalesorder) {
      return res.status(404).json({ error: "Salesorder not found" });
    }

    res.status(200).json({ status: 200, updatedSalesorder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteSalesorders(req, res) {
  const salesorderId = req.params.salesorderid;

  try {
    const deletedSalesorder = await SalesOrder.findByIdAndDelete(salesorderId);

    if (!deletedSalesorder) {
      return res.status(404).json({ error: "Salesorder not found" });
    }

    res.status(200).json({ status: 200, deletedSalesorder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addSalesorder,
  getAllSalesorder,
  editSalesorders,
  deleteSalesorders,
  getSelectedSalesorder,
};
