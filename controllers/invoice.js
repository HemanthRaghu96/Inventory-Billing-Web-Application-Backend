const Invoice = require("../models/invoiceSchema");

//Add invoice

async function addInvoice(req, res) {
  const {
    customername,
    invoice,
    ordernumber,
    invoicedate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
  } = req.body;
  console.log(req.body);
  if (!customername || !invoicedate || !invoice) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preinvoice = await Invoice.findOne({ customername: customername });

    if (preinvoice) {
      res.status(422).json({ error: "This invoice is Already Exist" });
    } else {
      const newInvoice = new Invoice({
        customername,
    invoice,
    ordernumber,
    invoicedate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
      });

      const savedInvoice = await newInvoice.save();
      res.status(201).json({ status: 201, savedInvoice });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error", error);
  }
}

//Get all Invoices

async function getAllInvoice(req, res) {
  try {
    const allInvoices = await Invoice.find();
    res.status(201).json({ status: 201, allInvoices });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedInvoice(req, res) {
  const invoiceId = req.params.invoiceid;
  try {
    const selectedInvoices = await Invoice.find({ _id: invoiceId });
    res.status(201).json({ status: 201, selectedInvoices });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editInvoices(req, res) {
  const invoiceId = req.params.invoiceid;
  console.log(invoiceId);
  const {
    customername,
    invoice,
    ordernumber,
    invoicedate,
    duedate,
    items,
    shipmentingcharges,
    termsconditions,
  } = req.body;

  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      invoiceId,
      {
        $set: {
            customername,
            invoice,
            ordernumber,
            invoicedate,
            duedate,
            items,
            shipmentingcharges,
            termsconditions,
        },
      },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json({ status: 200, updatedInvoice });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteInvoices(req, res) {
  const invoiceId = req.params.invoiceid;

  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId);

    if (!deletedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json({ status: 200, deletedInvoice });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addInvoice,
  getAllInvoice,
  editInvoices,
  deleteInvoices,
  getSelectedInvoice,
};
