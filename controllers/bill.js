const Bill = require("../models/billSchema");

//Add bill

async function addBill(req, res) {
  const {
    vendorname,
    bill,
    ordernumber,
    billdate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
  } = req.body;
  console.log(req.body);
  if (!vendorname || !billdate || !bill) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const prebill = await Bill.findOne({ vendorname: vendorname });

    if (prebill) {
      res.status(422).json({ error: "This bill is Already Exist" });
    } else {
      const newBill = new Bill({
        vendorname,
    bill,
    ordernumber,
    billdate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
      });

      const savedBill = await newBill.save();
      res.status(201).json({ status: 201, savedBill });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error", error);
  }
}

//Get all Bills

async function getAllBill(req, res) {
  try {
    const allBills = await Bill.find();
    res.status(201).json({ status: 201, allBills });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedBill(req, res) {
  const billId = req.params.billid;
  try {
    const selectedBills = await Bill.find({ _id: billId });
    res.status(201).json({ status: 201, selectedBills });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editBills(req, res) {
  const billId = req.params.billid;
  console.log(billId);
  const {
    vendorname,
    bill,
    ordernumber,
    billdate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
  } = req.body;

  try {
    const updatedBill = await Bill.findByIdAndUpdate(
      billId,
      {
        $set: {
            vendorname,
            bill,
            ordernumber,
            billdate,
            duedate,
            items,
            shipmentingcharges,
            termsconditions,
        },
      },
      { new: true }
    );

    if (!updatedBill) {
      return res.status(404).json({ error: "Bill not found" });
    }

    res.status(200).json({ status: 200, updatedBill });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteBills(req, res) {
  const billId = req.params.billid;

  try {
    const deletedBill = await Bill.findByIdAndDelete(billId);

    if (!deletedBill) {
      return res.status(404).json({ error: "Bill not found" });
    }

    res.status(200).json({ status: 200, deletedBill });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addBill,
  getAllBill,
  editBills,
  deleteBills,
  getSelectedBill,
};