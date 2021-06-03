const express = require("express");
const emojis = require("./emojis");
const router = express.Router();
const queue = require("express-queue");
const fs = require("fs");
var path = require("path");

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
  var jsonPath = path.join(__dirname, "..", "bar_config.json");
  fs.readFile(jsonPath, "utf8", function (err, data) {
    if (err) {
      fs.writeFile(
        jsonPath,
        JSON.stringify([{}, {}, {}, {}, {}, {}, {}, {}]),
        function (err) {
          res.json([{}, {}, {}, {}, {}, {}, {}, {}]);
        }
      );
    } else {
      res.json(JSON.parse(data));
    }
  });
});

router.post("/settings", (req, res) => {
  let settings = req.body;
  var jsonPath = path.join(__dirname, "..", "bar_config.json");
  console.log(jsonPath);
  fs.writeFile(jsonPath, JSON.stringify(settings), function (err) {
    if (err) {
      return console.log(err);
    }
    res.json("Saved");
  });
});

router.use("/emojis", emojis);

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

module.exports = router;
