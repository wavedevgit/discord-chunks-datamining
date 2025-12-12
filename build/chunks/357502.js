/** Chunk was on web.js **/
/** chunk id: 357502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk822632 = require("./822632.js"),
  Chunk791473 = require("./791473.js");
let o = {
  isWebpFile: a,
  findOffsets: s
};

function a(e) {
  let t = 0,
    n = "RIFF",
    i = 8,
    o = "WEBP";
  return !!e && (0, r.oH)(e, t, n.length) === n && (0, r.oH)(e, i, o.length) === o
}

function s(e) {
  let t, n, o, a, s = 4,
    l = "Exif\0\0",
    c = 8,
    u = 12,
    d = false;
  for (; u + c < e.byteLength;) {
    let f = (0, r.oH)(e, u, 4),
      p = e.getUint32(u + s, true);
    i.Z.USE_EXIF && "EXIF" === f ? (d = true, t = (0, r.oH)(e, u + c, l.length) === l ? u + c + l.length : u + c) : i.Z.USE_XMP && "XMP " === f ? (d = true, n = [{
      dataOffset: u + c,
      length: p
    }]) : i.Z.USE_ICC && "ICCP" === f ? (d = true, o = [{
      offset: u + c,
      length: p,
      chunkNumber: 1,
      chunksTotal: 1
    }]) : "VP8X" === f && (d = true, a = u + c), u += c + (p % 2 == 0 ? p : p + 1)
  }
  return {
    hasAppMarkers: d,
    tiffHeaderOffset: t,
    xmpChunks: n,
    iccChunks: o,
    vp8xChunkOffset: a
  }
}