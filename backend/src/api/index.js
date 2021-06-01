const express = require("express");
const emojis = require("./emojis");
const router = express.Router();

const { drinks } = require("../drinks_config");

router.get("/drinks", (req, res) => {
  res.json(drinks);
});

router.post("/tend", (req, res) => {
  console.log(req.body);
  res.json("Making...");
});

router.get("/settings", (req, res) => {
  res.json([{}, {}, {}, {}, {}, {}, {}, {}]);
});

router.use("/emojis", emojis);

module.exports = router;
