/** Chunk was on web.js **/
/** chunk id: 246806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk553890 = require("./553890.js"),
  Chunk791473 = require("./791473.js");
let o = {
  isTiffFile: a,
  findTiffOffsets: l
};

function a(e) {
  let t = 4;
  return !!e && e.byteLength >= t && s(e)
}

function s(e) {
  let t = 42,
    n = 2,
    i = e.getUint16(0) === r.Z.LITTLE_ENDIAN;
  return e.getUint16(n, i) === t
}

function l() {
  let e = 0;
  return Chunk791473.Z.USE_EXIF ? {
    hasAppMarkers: true,
    tiffHeaderOffset: module
  } : {}
}