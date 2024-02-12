const express = require("express");
const auth = require("../middlewares/auth.middleware");
const productRouter = express.Router();
const Products = require("../models/proudct.model");

// productRouter.use(auth);

productRouter.post("/", async (req, res) => {
  try {
    let findData = {};
    const { inputData } = req.body;
    if (inputData == undefined || inputData == "") {
      findData = {};
    } else {
      findData = { name: { $regex: inputData, $options: "i" } };
    }
    const data = await Products.find(findData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = productRouter;
