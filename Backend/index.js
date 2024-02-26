const express = require("express");
const cors = require("cors");
const connectDB = require("./src/configs/db");
const userRouter = require("./src/routes/user.routes");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const productRouter = require("./src/routes/product.routes");
const cartRouter = require("./src/routes/cart.routes");

const app = express();
// server
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:8008",
      "*",
      "http://localhost:5173",
      "https://allegro-pl.vercel.app",
    ],
    credentials: true,
  })
);

// routes
app.use("/users", userRouter)
app.use("/products", productRouter);
app.use("/carts",cartRouter)

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Allegro Backend!" });
});
app.get("*", (req, res) => {
  res.status(404).json({ msg: "Page not found" });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
