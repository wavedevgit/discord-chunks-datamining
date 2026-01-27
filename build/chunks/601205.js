/** Chunk was on web.js **/
/** chunk id: 601205, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk761799 = require("./761799.js"),
  Chunk409437 = require("./409437.js"),
  Chunk706208 = require("./706208.js"),
  Chunk234291 = require("./234291.js"),
  Chunk423661 = require("./423661.js"),
  Chunk356826 = require("./356826.js"),
  Chunk793600 = require("./793600.js"),
  Chunk195386 = require("./195386.js"),
  Chunk970667 = require("./970667.js"),
  Chunk643479 = require("./643479.js");
let p = {
  parseAppMarkers: _
};

function _(e, t) {
  if (r.A.USE_TIFF && i.A.isTiffFile(e)) return h(i.A.findTiffOffsets(), "tiff", "TIFF");
  if (r.A.USE_JPEG && a.A.isJpegFile(e)) return h(a.A.findJpegOffsets(e), "jpeg", "JPEG");
  if (r.A.USE_PNG && o.Ay.isPngFile(e)) return h(o.Ay.findPngOffsets(e, t), "png", "PNG");
  if (r.A.USE_HEIC && s.A.isHeicFile(e)) return h(s.A.findHeicOffsets(e), "heic", "HEIC");
  if (r.A.USE_AVIF && l.A.isAvifFile(e)) return h(l.A.findAvifOffsets(e), "avif", "AVIF");
  if (r.A.USE_WEBP && c.A.isWebpFile(e)) return h(c.A.findOffsets(e), "webp", "WebP");
  if (r.A.USE_GIF && u.A.isGifFile(e)) return h(u.A.findOffsets(e), "gif", "GIF");
  if (r.A.USE_XMP && d.A.isXMLFile(e)) return h(d.A.findOffsets(e), "xml", "XML");
  throw Error("Invalid image format")
}

function h(e, t, n) {
  return (0, f.dP)({}, e, {
    fileType: {
      value: t,
      description: n
    }
  })
}