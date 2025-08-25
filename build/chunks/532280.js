/** Chunk was on web.js **/
/** chunk id: 532280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk441349 = require("./441349.js"),
  Chunk93856 = require("./93856.js"),
  Chunk635927 = require("./635927.js"),
  Chunk906597 = require("./906597.js"),
  Chunk254797 = require("./254797.js"),
  Chunk837437 = require("./837437.js"),
  Chunk853879 = require("./853879.js"),
  Chunk170053 = require("./170053.js"),
  Chunk992374 = require("./992374.js"),
  Chunk463424 = require("./463424.js");
let _ = {
  parseAppMarkers: p
};

function p(e, t) {
  if (r.Z.USE_TIFF && i.Z.isTiffFile(e)) return h(i.Z.findTiffOffsets(), "tiff", "TIFF");
  if (r.Z.USE_JPEG && o.Z.isJpegFile(e)) return h(o.Z.findJpegOffsets(e), "jpeg", "JPEG");
  if (r.Z.USE_PNG && a.ZP.isPngFile(e)) return h(a.ZP.findPngOffsets(e, t), "png", "PNG");
  if (r.Z.USE_HEIC && s.Z.isHeicFile(e)) return h(s.Z.findHeicOffsets(e), "heic", "HEIC");
  if (r.Z.USE_AVIF && l.Z.isAvifFile(e)) return h(l.Z.findAvifOffsets(e), "avif", "AVIF");
  if (r.Z.USE_WEBP && c.Z.isWebpFile(e)) return h(c.Z.findOffsets(e), "webp", "WebP");
  if (r.Z.USE_GIF && u.Z.isGifFile(e)) return h(u.Z.findOffsets(e), "gif", "GIF");
  if (r.Z.USE_XMP && d.Z.isXMLFile(e)) return h(d.Z.findOffsets(e), "xml", "XML");
  throw Error("Invalid image format")
}

function h(e, t, n) {
  return (0, f.wB)({}, e, {
    fileType: {
      value: t,
      description: n
    }
  })
}