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

cartRouter.post("/add/:_id", async (req, res) => {
  try {
    // let  id  = req.params.id;
    // id = Number(id)
    const { _id } = req.params;
    const { userID } = req.body;
    let data = await Products.findOne({ _id });
    console.log({ data, _id, userID });
    if (!data) {
      throw new Error("Product not found");
    } else {
      const cartData = new Cart({
        userID: userID,
        productId: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        category: data.category,
        shipping: data.shipping,
        star: data.star,
      });
      console.log({ cartData });
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
    res.status(500).json({ error: error.message });
  }
});

cartRouter.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { userID } = req.body;
    await Cart.deleteOne({ _id, userID });
    res.status(200).json({ msg: `data deleted successfully with id ${_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = cartRouter;
