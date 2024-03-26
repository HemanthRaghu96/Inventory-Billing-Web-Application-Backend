const Vendor = require("../models/vendorSchema");

//Add Vendor

async function addVendor(req, res) {
  const {
    firstname,
    lastname,
    displayname,
    companyname,
    email,
    phonenumber,
    pan,
    billingaddress,
    billingcountry,
    billingcity,
    billingstate,
    billingpincode,
    shippingaddress,
    shippingcountry,
    shippingcity,
    shippingstate,
    shippingpincode,
  } = req.body;
  console.log(req.body);
  if (
    !firstname ||
    !lastname ||
    !displayname ||
    !companyname ||
    !email ||
    !phonenumber ||
    !pan
  ) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preVendor = await Vendor.findOne({ displayname: displayname });

    if (preVendor) {
      res.status(422).json({ error: "This Vendor is Already Exist" });
    } else {
      const newVendor = new Vendor({
        firstname,
        lastname,
        displayname,
        companyname,
        email,
        phonenumber,
        pan,
        billingaddress,
        billingcountry,
        billingcity,
        billingstate,
        billingpincode,
        shippingaddress,
        shippingcountry,
        shippingcity,
        shippingstate,
        shippingpincode,
      });

      const savedVendor = await newVendor.save();
      res.status(201).json({ status: 201, savedVendor });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("Error", error);
  }
}

//Get all Vendor

async function getAllVendor(req, res) {
  try {
    const allVendor = await Vendor.find();
    res.status(201).json({ status: 201, allVendor });
  } catch (error) {
    res.status(422).json(error);
    console.log("Error", error);
  }
}

//Get Selected vendor

async function getSelectedVendor(req, res) {
  const vendorId = req.params.vendorid;
  try {
    const selectedVendor = await Vendor.find({ _id: vendorId });
    res.status(201).json({ status: 201, selectedVendor });
  } catch (error) {
    res.status(422).json(error);
    console.log("Error", error);
  }
}

//Edit vendor

async function editVendor(req, res) {
  const vendorId = req.params.vendorid;
  console.log(vendorId);
  const {
    firstname,
    lastname,
    displayname,
    companyname,
    email,
    phonenumber,
    pan,
    billingaddress,
    billingcountry,
    billingcity,
    billingstate,
    billingpincode,
    shippingaddress,
    shippingcountry,
    shippingcity,
    shippingstate,
    shippingpincode,
  } = req.body;

  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      vendorId,
      {
        $set: {
          firstname,
          lastname,
          displayname,
          companyname,
          email,
          phonenumber,
          pan,
          billingaddress,
          billingcountry,
          billingcity,
          billingstate,
          billingpincode,
          shippingaddress,
          shippingcountry,
          shippingcity,
          shippingstate,
          shippingpincode,
        },
      },
      { new: true }
    );

    if (!updatedVendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.status(200).json({ status: 200, updatedVendor });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

//Delete vendor

async function deleteVendor(req, res) {
  const vendorId = req.params.vendorid;

  try {
    const deletedVendor = await Vendor.findByIdAndDelete(vendorId);

    if (!deletedVendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.status(200).json({ status: 200, deletedVendor });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addVendor,
  getAllVendor,
  editVendor,
  deleteVendor,
  getSelectedVendor,
};
