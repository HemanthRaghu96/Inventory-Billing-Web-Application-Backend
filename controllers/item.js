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

module.exports = {
  addItem,
  getAllItem,
};
