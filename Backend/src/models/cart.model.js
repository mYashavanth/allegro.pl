const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    shipping: { type: String, required: true },
    star: { type: String, required: true },
    userID: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
