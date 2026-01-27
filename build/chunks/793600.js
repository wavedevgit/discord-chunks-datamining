/** Chunk was on web.js **/
/** chunk id: 793600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk643479 = require("./643479.js"),
  Chunk761799 = require("./761799.js");
let a = {
  isWebpFile: o,
  findOffsets: s
};

function o(e) {
  let t = 0,
    n = "RIFF",
    i = 8,
    a = "WEBP";
  return !!e && (0, r.hT)(e, t, n.length) === n && (0, r.hT)(e, i, a.length) === a
}

function s(e) {
  let t, n, a, o, s = 4,
    l = "Exif\0\0",
    c = 8,
    u = 12,
    d = false;
  for (; u + c < e.byteLength;) {
    let f = (0, r.hT)(e, u, 4),
      p = e.getUint32(u + s, true);
    i.A.USE_EXIF && "EXIF" === f ? (d = true, t = (0, r.hT)(e, u + c, l.length) === l ? u + c + l.length : u + c) : i.A.USE_XMP && "XMP " === f ? (d = true, n = [{
      dataOffset: u + c,
      length: p
    }]) : i.A.USE_ICC && "ICCP" === f ? (d = true, a = [{
      offset: u + c,
      length: p,
      chunkNumber: 1,
      chunksTotal: 1
    }]) : "VP8X" === f && (d = true, o = u + c), u += c + (p % 2 == 0 ? p : p + 1)
  }
  return {
    hasAppMarkers: d,
    tiffHeaderOffset: t,
    xmpChunks: n,
    iccChunks: a,
    vp8xChunkOffset: o
  }
}