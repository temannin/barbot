const express = require("express");
const emojis = require("./emojis");
const router = express.Router();
const queue = require("express-queue");

const { drinks } = require("../drinks_config");

router.get("/drinks", (req, res) => {
  res.json(drinks);
});

router.post("/tend", queue({ activeLimit: 1, queuedLimit: -1 }), (req, res) => {
  sleep(5000).then(() => {
    res.json("Test");
  });
});

router.get("/settings", (req, res) => {
  res.json([{}, {}, {}, {}, {}, {}, {}, {}]);
});

router.post("/settings", (req, res) => {
})

router.use("/emojis", emojis);

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

module.exports = router;
