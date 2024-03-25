const Item = require("../models/itemSchema");

//Add item

async function addItem(req, res) {
  const {
    name,
    sku,
    unit,
    poster,
    dimensions,
    manufacturer,
    upc,
    ean,
    weight,
    brand,
    mpn,
    isbn,
    sellingprice,
    salesaccount,
    salesdescription,
    costprice,
    purchaseaccount,
    purchasedescription,
  } = req.body;
  console.log(req.body);
  if (
    !name ||
    !unit ||
    !sellingprice ||
    !salesaccount ||
    !costprice ||
    !purchaseaccount
  ) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preitem = await Item.findOne({ name: name });

    if (preitem) {
      res.status(422).json({ error: "This item is Already Exist" });
    } else {
      const newItem = new Item({
        name,
        sku,
        unit,
        poster,
        dimensions,
        manufacturer,
        upc,
        ean,
        weight,
        brand,
        mpn,
        isbn,
        sellingprice,
        salesaccount,
        salesdescription,
        costprice,
        purchaseaccount,
        purchasedescription,
      });

      const savedItem = await newItem.save();
      res.status(201).json({ status: 201, savedItem });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

//Get all Items

async function getAllItem(req, res) {
  try {
    const allItems = await Item.find();
    res.status(201).json({ status: 201, allItems });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function getSelectedItem(req, res) {
  const itemId = req.params.itemid;
  try {
    const selectedItems = await Item.find({_id:itemId});
    res.status(201).json({ status: 201, selectedItems });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

async function editItems(req, res) {
  const itemId = req.params.itemid;
  console.log(itemId)
  const {
    name,
    sku,
    unit,
    poster,
    dimensions,
    manufacturer,
    upc,
    ean,
    weight,
    brand,
    mpn,
    isbn,
    sellingprice,
    salesaccount,
    salesdescription,
    costprice,
    purchaseaccount,
    purchasedescription,
  } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      {
        $set: {
          name,
          sku,
          unit,
          poster,
          dimensions,
          manufacturer,
          upc,
          ean,
          weight,
          brand,
          mpn,
          isbn,
          sellingprice,
          salesaccount,
          salesdescription,
          costprice,
          purchaseaccount,
          purchasedescription,
        },
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ status: 200, updatedItem });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteItems(req, res) {
  const itemId = req.params.itemid;

  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ status: 200, deletedItem });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addItem,
  getAllItem,
  editItems,
  deleteItems,
  getSelectedItem
};