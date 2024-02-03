const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
// server
const PORT = process.env.PORT;


// middlewares
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:8008","*"],
    credentials: true
}));

// routes



app.get("/", (req, res) => {
    res.send("Welcome to the Allegro Backend!");
})
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

