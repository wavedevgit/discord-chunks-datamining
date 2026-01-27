/** Chunk was on web.js **/
/** chunk id: 409437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk890167 = require("./890167.js"),
  Chunk761799 = require("./761799.js");
let a = {
  isTiffFile: o,
  findTiffOffsets: l
};

function o(e) {
  let t = 4;
  return !!e && e.byteLength >= t && s(e)
}

function s(e) {
  let t = 42,
    n = 2,
    i = e.getUint16(0) === r.A.LITTLE_ENDIAN;
  return e.getUint16(n, i) === t
}

function l() {
  let e = 0;
  return i.A.USE_EXIF ? {
    hasAppMarkers: true,
    tiffHeaderOffset: e
  } : {}
}