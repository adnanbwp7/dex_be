const express = require("express");
const router = express.Router();
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

// Following route is used to get the products:

router.get("/get-products/:limit/:name", async (req, res) => {
  try {

    sneaks.getProducts(req.params.name, req.params.limit, function (err, products) {
      if (err) {
        return res.json({
          error: err?.message,
          success: false,
        });
      }
      res.json({
        products,
        success: true,
      });
    });
  } catch (error) {
    res.json({
      error,
      success: false,
    });
  }
});

// Following route is used to get the product prices:

router.get("/get-prices/:name", async (req, res) => {
  try {

    sneaks.getProductPrices(req.params.name, function (err, product) {
      if (err) {
        return res.json({
          error: err?.message,
          success: false,
        });
      }
      res.json({
        product,
        success: true,
      });
    });
  } catch (error) {
    res.json({
      error: error,
      success: false,
    });
  }
});

// Following route is used to get the trending or most popular products:

router.get("/get-popular/:limit", async (req, res) => {
  try {
    // const { limit } = req.body;

    sneaks.getMostPopular(req.params.limit, function (err, products) {
      if (err) {
        return res.json({
          error: err?.message,
          success: false,
        });
      }
      res.json({
        products,
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
