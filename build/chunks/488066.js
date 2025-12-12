/** Chunk was on web.js **/
/** chunk id: 488066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk791473 = require("./791473.js"),
  Chunk246806 = require("./246806.js"),
  Chunk200508 = require("./200508.js"),
  Chunk649793 = require("./649793.js"),
  Chunk506438 = require("./506438.js"),
  Chunk379135 = require("./379135.js"),
  Chunk357502 = require("./357502.js"),
  Chunk465178 = require("./465178.js"),
  Chunk849856 = require("./849856.js"),
  Chunk822632 = require("./822632.js");
let p = {
  parseAppMarkers: _
};

function _(e, t) {
  if (r.Z.USE_TIFF && i.Z.isTiffFile(e)) return m(i.Z.findTiffOffsets(), "tiff", "TIFF");
  if (r.Z.USE_JPEG && o.Z.isJpegFile(e)) return m(o.Z.findJpegOffsets(e), "jpeg", "JPEG");
  if (r.Z.USE_PNG && a.ZP.isPngFile(e)) return m(a.ZP.findPngOffsets(e, t), "png", "PNG");
  if (r.Z.USE_HEIC && s.Z.isHeicFile(e)) return m(s.Z.findHeicOffsets(e), "heic", "HEIC");
  if (r.Z.USE_AVIF && l.Z.isAvifFile(e)) return m(l.Z.findAvifOffsets(e), "avif", "AVIF");
  if (r.Z.USE_WEBP && c.Z.isWebpFile(e)) return m(c.Z.findOffsets(e), "webp", "WebP");
  if (r.Z.USE_GIF && u.Z.isGifFile(e)) return m(u.Z.findOffsets(e), "gif", "GIF");
  if (r.Z.USE_XMP && d.Z.isXMLFile(e)) return m(d.Z.findOffsets(e), "xml", "XML");
  throw Error("Invalid image format")
}

function m(e, t, n) {
  return (0, f.wB)({}, e, {
    fileType: {
      value: t,
      description: n
    }
  })
}