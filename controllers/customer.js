const Customer = require("../models/customerSchema");

//Add Customer

async function addCustomer(req, res) {
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
   return res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preCustomer = await Customer.findOne({ displayname: displayname });

    if (preCustomer) {
      return res.status(422).json({ error: "This Customer is Already Exist" });
    } else {
      const newCustomer = new Customer({
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

      const savedCustomer = await newCustomer.save();
      return res.status(201).json({ status: 201, savedCustomer });
    }
  } catch (error) {
    console.log("Error", error);
    return  res.status(500).json(error);
  
  }
}

//Get all Customer

async function getAllCustomer(req, res) {
  try {
    const allCustomer = await Customer.find();
       res.status(201).json({ status: 201, allCustomer });
  } catch (error) {
    res.status(422).json(error);
    console.log("Error", error);
  }
}

//Get Selected customer

async function getSelectedCustomer(req, res) {
  const customerId = req.params.customerid;
  try {
    const selectedCustomer = await Customer.find({ _id: customerId });
    res.status(201).json({ status: 201, selectedCustomer });
  } catch (error) {
    res.status(422).json(error);
    console.log("Error", error);
  }
}

//Edit customer

async function editCustomer(req, res) {
  const customerId = req.params.customerid;
  console.log(customerId);
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
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
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

    if (!updatedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({ status: 200, updatedCustomer });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

//Delete customer

async function deleteCustomer(req, res) {
  const customerId = req.params.customerid;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({ status: 200, deletedCustomer });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addCustomer,
  getAllCustomer,
  editCustomer,
  deleteCustomer,
  getSelectedCustomer,
};
