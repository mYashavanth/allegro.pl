const express = require("express");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(auth)
router.get("/", (req, res) => {
    res.json({ msg: "Welcome to the Allegro Backend!" });
})

module.exports = router