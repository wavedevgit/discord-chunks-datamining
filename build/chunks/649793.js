/** Chunk was on web.js **/
/** chunk id: 649793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => l,
  Ic: () => u,
  Jn: () => p,
  ZN: () => g,
  ZP: () => a,
  a0: () => _,
  oT: () => m,
  vx: () => d,
  z_: () => h,
  zi: () => c
});
var Chunk822632 = require("./822632.js"),
  Chunk791473 = require("./791473.js");
let a = {
    isPngFile: y,
    findPngOffsets: O
  },
  o = "\x89PNG\r\n\x1a\n",
  s = 4,
  l = 4,
  c = 0,
  u = 4,
  d = 8,
  f = "XML:com.adobe.xmp\0",
  _ = "tEXt",
  p = "iTXt",
  h = "zTXt",
  m = "pHYs",
  g = "tIME",
  E = "eXIf",
  b = "iCCP";

function y(e) {
  return !!e && (0, r.oH)(e, 0, o.length) === o
}

function O(e, t) {
  let n = 4,
    a = {
      hasAppMarkers: false
    },
    f = o.length;
  for (; f + s + l <= e.byteLength;) {
    if (i.Z.USE_PNG_FILE && v(e, f)) a.hasAppMarkers = true, a.pngHeaderOffset = f + d;
    else if (i.Z.USE_XMP && I(e, f)) {
      let t = N(e, f);
      true !== t && (a.hasAppMarkers = true, a.xmpChunks = [{
        dataOffset: t,
        length: e.getUint32(f + c) - (t - (f + d))
      }])
    } else if (S(e, f, t)) {
      a.hasAppMarkers = true;
      let t = (0, r.oH)(e, f + u, l);
      a.pngTextChunks || (a.pngTextChunks = []), a.pngTextChunks.push({
        length: e.getUint32(f + c),
        type: t,
        offset: f + d
      })
    } else if (T(e, f)) a.hasAppMarkers = true, a.tiffHeaderOffset = f + d;
    else if (i.Z.USE_ICC && t && A(e, f)) {
      a.hasAppMarkers = true;
      let t = e.getUint32(f + c),
        n = f + d,
        {
          profileName: r,
          compressionMethod: i,
          compressedProfileOffset: o
        } = R(e, n);
      a.iccChunks || (a.iccChunks = []), a.iccChunks.push({
        offset: o,
        length: t - (o - n),
        chunkNumber: 1,
        chunksTotal: 1,
        profileName: r,
        compressionMethod: i
      })
    } else C(e, f) && (a.hasAppMarkers = true, a.pngChunkOffsets || (a.pngChunkOffsets = []), a.pngChunkOffsets.push(f + c));
    f += e.getUint32(f + c) + s + l + n
  }
  return a
}

function v(e, t) {
  let n = "IHDR";
  return (0, r.oH)(e, t + u, l) === n
}

function I(e, t) {
  return (0, r.oH)(e, t + u, l) === p && (0, r.oH)(e, t + d, f.length) === f
}

function S(e, t, n) {
  let i = (0, r.oH)(e, t + u, l);
  return i === _ || i === p || i === h && n
}

function T(e, t) {
  return (0, r.oH)(e, t + u, l) === E
}

function A(e, t) {
  return (0, r.oH)(e, t + u, l) === b
}

function C(e, t) {
  return [m, g].includes((0, r.oH)(e, t + u, l))
}

function N(e, t) {
  let n = 1,
    r = 1;
  t += d + f.length + n + r;
  let i = 0;
  for (; i < 2 && t < e.byteLength;) 0 === e.getUint8(t) && i++, t++;
  if (!(i < 2)) return t
}

function R(e, t) {
  let n = 1,
    i = 1,
    a = (0, r.o7)(e, t);
  return t += a.length + n, {
    profileName: a,
    compressionMethod: e.getUint8(t),
    compressedProfileOffset: t += i
  }
}