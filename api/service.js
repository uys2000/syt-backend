const youtubedl = require("youtube-dl");

exports.getInfo = function (url, options) {
  return new Promise((resolve, reject) => {
    youtubedl.getInfo(url, options, function (err, info) {
      if (err) reject(err);
      resolve(info);
    });
  });
};

exports.download = function (url, formatId) {
  return youtubedl(url, [`--format=${formatId}`,"--output-na-placeholder=%(title)s.%(ext)s"]);
};
