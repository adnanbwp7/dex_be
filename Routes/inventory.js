const express = require("express");
const InventoryModel = require("../Model/Inventory");
const router = express.Router();

// Following route is used to add data to inventory:

router.post("/add-inventory", async (req, res) => {
  try {
    const { name, category, minPrice, dynamicPrice, quantity, image, size } = req.body;

    let createdInventory = await InventoryModel.create({
      name,
      category,
      minPrice,
      dynamicPrice,
      quantity,
      image, 
      size
    });

    res.json({
      createdInventory,
      success: true,
    });
  } catch (error) {
    res.json({
      error: error,
      success: false,
    });
  }
});

// Following route is used to get data from inventory:

router.get("/get-inventory", async (req, res) => {
  try {
    const allInventory = await InventoryModel.find();
    res.json({
      allInventory,
      success: true,
    });
  } catch (error) {
    res.json({
      error: error?.message,
      success: false,
    });
  }
});

// Following route is used to update data from inventory:

router.put("/update-inventory/:id", async (req, res) => {
  try {
    const { name, category, minPrice, dynamicPrice, quantity, size } = req.body;

    let newObj = {};

    if (name) {
      newObj["name"] = name;
    }

    if (category) {
      newObj["category"] = category;
    }

    if (minPrice) {
      newObj["minPrice"] = minPrice;
    }

    if (dynamicPrice) {
      newObj["dynamicPrice"] = dynamicPrice;
    }

    if (quantity) {
      newObj["quantity"] = quantity;
    }

    if (size) {
      newObj["size"] = size;
    }

    let updatedInventory = await InventoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: newObj },
      { new: true }
    );

    res.json({
      updatedInventory,
      success: true,
    });
  } catch (error) {
    res.json({
      error: error?.message,
      success: false,
    });
  }
});

// Following route is used to get the specific inventory:

router.get("/inventory/:id", async (req, res) => {
  try {
    
    let inventory = await InventoryModel.findById(req.params.id);

    res.json({inventory, success: true});

  } catch (error) {
    console.error(error)    
  }
})


// Following route is used delete data from inventory:

router.delete("/delete-inventory/:id", async (req, res) => {
  try {
    let deletedInventory = await InventoryModel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      deletedInventory,
    });
  } catch (error) {
    res.json({
      error: error?.message,
      success: false,
    });
  }
});

module.exports = router;
