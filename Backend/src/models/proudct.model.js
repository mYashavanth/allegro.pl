const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    shipping: { type: String, required: true },
    star: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Products = mongoose.model("product", productSchema);

module.exports = Products
