const express = require("express");
const cartRouter = express.Router();
const Cart = require("../models/cart.model");
const Products = require("../models/proudct.model");
const auth = require("../middlewares/auth.middleware");

cartRouter.use(auth);

cartRouter.get("/", async (req, res) => {
  try {
    const data = await Cart.find({ userId: req.userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

cartRouter.post("/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userID } = req.body;
    const data = await Products.find({ id });
    if (!data) {
      throw new Error("Product not found");
    } else {
      const cartData = new Cart({ ...data, userID: userID });
      await cartData
        .save()
        .then(() => {
          res.status(200).json({
            msg: "Product added to cart",
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err.message,
          });
        });
    }
  } catch (error) {
    res.status(500).json({ error: errro.message });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userID } = req.body;
    await Cart.deleteOne({ id: id, userID: userID });
    res.status(200).json({ msg: `data deleted successfully with id ${id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = cartRouter;
