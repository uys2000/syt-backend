exports.getInfo = function (info) {
  return {
    id: info.id,
    title: info.title,
    formats: info.formats.map((item) => {
      return {
        asr: item.asr,
        filesize: item.filesize,
        formatId: item.format_id,
        formatNote: item.format_note,
        fps: item.fps,
        quality: item.quality,
        tbr: item.tbr,
        ext: item.ext,
        vcodec: item.vcodec,
        acodec: item.acodec,
        abr: item.abr,
        format: item.format,
        url: info.url,
      };
    }),
    thumbnails: info.thumbnails,
    desc: info.description,
  };
};
