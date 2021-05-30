const express = require("express");

const emojis = require("./emojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.get("/drinks", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Jack and Coke",
      description: "Pretty simple, Jack and Coke",
      src: "https://www.acouplecooks.com/wp-content/uploads/2020/12/Jack-and-Coke-003.jpg",
    },
    {
      id: 2,
      name: "Vodka Cranberry",
      description: "Pretty simple, Vodka and Cranberry",
      src: "https://www.acouplecooks.com/wp-content/uploads/2019/12/Vodka-Cranberry-001.jpg",
    },
  ]);
});

router.post("/tend", (req, res) => {
  console.log(req.body);
  res.json("Making...");
});

router.get("/settings", (req, res) => {
  res.json([{}, {}, {}, {}, {}, {}, {}, {}])
})

router.use("/emojis", emojis);

module.exports = router;
