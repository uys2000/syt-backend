var express = require("express");
var router = express.Router();

router.get("*", function (req, res) {
  res.json({
    msg: "Welcome",
    options: [
      "/info/video/:id",
      "/download/video/:id/:formatid",
      "/open/video/:id/:formatid",
    ],
  });
});

module.exports = router;
