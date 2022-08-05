const youtubedl = require("youtube-dl");

exports.getInfo = function (url, options) {
  return new Promise((resolve, reject) => {
    youtubedl.getInfo(url, options, function (err, info) {
      if (err) throw reject(err);
      resolve(info);
    });
  });
};
