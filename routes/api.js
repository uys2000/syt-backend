const express = require("express");
const router = express.Router();
const service = require("../api/service");
const core = require("../api/core");

router.get("/info/video/:id", (req, res) => {
  service
    .getInfo("https://youtu.be/" + req.params.id)
    .then((info) => {
      const r = core.getInfo(info);
      res.status(200).json({
        status: 200,
        data: r,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(
        JSON.stringify({
          error: err,
        })
      );
    });
});
  
router.get("/download/video/:id/:formatid", (req, res, next) => {
  const video = service.download(
    "https://youtu.be/" + req.params.id,
    req.params.formatid
  );
  video.on("open", () => {
    video.pipe(res);
  });
  video.on("info", (info) => {
    res.attachment(info._filename);
    res.set({
      "Content-Length": info.size,
    });
  });
  video.on("error", (err) => {
    next(err);
  });
  video.pipe(res);
});

router.get("/open/video/:id/:formatid", (req, res, next) => {
  const video = service.download(
    "https://youtu.be/" + req.params.id,
    req.params.formatid
  );
  video.on("open", () => {
    video.pipe(res);
  });

  video.on("error", (err) => {
    next(err);
  });
  video.pipe(res);
});

module.exports = router;
