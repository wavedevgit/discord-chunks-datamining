/** Chunk was on web.js **/
/** chunk id: 706208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk643479 = require("./643479.js"),
  Chunk761799 = require("./761799.js");
let a = {
    isJpegFile: F,
    findJpegOffsets: V
  },
  o = 2,
  s = 65496,
  l = 2,
  c = 4,
  u = 2,
  d = 2,
  f = 10,
  p = 18,
  _ = 33,
  h = 79,
  m = 18,
  g = 8,
  E = "ICC_PROFILE\0",
  y = 4 + E.length,
  b = y + 1,
  O = "MPF\0",
  v = 65472,
  A = 65474,
  I = 65476,
  S = 65499,
  T = 65501,
  C = 65498,
  N = 65504,
  w = 65505,
  R = 65506,
  P = 65517,
  D = 65519,
  L = 65534,
  x = 65535,
  M = "JFIF",
  j = "Exif",
  k = "http://ns.adobe.com/xap/1.0/\0",
  U = "http://ns.adobe.com/xmp/extension/\0",
  G = "Photoshop 3.0";

function F(e) {
  return !!e && e.byteLength >= o && e.getUint16(0) === s
}

function V(e) {
  let t, n, r, a, o, s, _, h, E, O = l;
  for (; O + c + 5 <= e.byteLength;) {
    if (i.A.USE_FILE && B(e, O)) t = e.getUint16(O + u), n = O + u;
    else if (i.A.USE_FILE && H(e, O)) t = e.getUint16(O + u), r = O + u;
    else if (i.A.USE_JFIF && K(e, O)) t = e.getUint16(O + u), a = O + d;
    else if (i.A.USE_EXIF && z(e, O)) t = e.getUint16(O + u), o = O + f;
    else if (i.A.USE_XMP && q(e, O)) _ || (_ = []), t = e.getUint16(O + u), _.push(J(O, t));
    else if (i.A.USE_XMP && Q(e, O)) _ || (_ = []), t = e.getUint16(O + u), _.push($(O, t));
    else if (i.A.USE_IPTC && ee(e, O)) t = e.getUint16(O + u), s = O + p;
    else if (i.A.USE_ICC && Y(e, O)) {
      t = e.getUint16(O + u);
      let n = O + m,
        r = t - (m - u),
        i = e.getUint8(O + y),
        a = e.getUint8(O + b);
      h || (h = []), h.push({
        offset: n,
        length: r,
        chunkNumber: i,
        chunksTotal: a
      })
    } else if (i.A.USE_MPF && W(e, O)) t = e.getUint16(O + u), E = O + g;
    else if (et(e, O)) t = e.getUint16(O + u);
    else if (en(e, O)) {
      O++;
      continue
    } else break;
    O += u + t
  }
  return {
    hasAppMarkers: O > l,
    fileDataOffset: n || r,
    jfifDataOffset: a,
    tiffHeaderOffset: o,
    iptcDataOffset: s,
    xmpChunks: _,
    iccChunks: h,
    mpfDataOffset: E
  }
}

function B(e, t) {
  return e.getUint16(t) === v
}

function H(e, t) {
  return e.getUint16(t) === A
}

function Y(e, t) {
  let n = E.length;
  return e.getUint16(t) === R && (0, r.hT)(e, t + c, n) === E
}

function W(e, t) {
  let n = O.length;
  return e.getUint16(t) === R && (0, r.hT)(e, t + c, n) === O
}

function K(e, t) {
  let n = M.length;
  return e.getUint16(t) === N && (0, r.hT)(e, t + c, n) === M && 0 === e.getUint8(t + c + n)
}

function z(e, t) {
  let n = j.length;
  return e.getUint16(t) === w && (0, r.hT)(e, t + c, n) === j && 0 === e.getUint8(t + c + n)
}

function q(e, t) {
  return e.getUint16(t) === w && Z(e, t)
}

function Z(e, t) {
  let n = k.length;
  return (0, r.hT)(e, t + c, n) === k
}

function Q(e, t) {
  return e.getUint16(t) === w && X(e, t)
}

function X(e, t) {
  let n = U.length;
  return (0, r.hT)(e, t + c, n) === U
}

function J(e, t) {
  return {
    dataOffset: e + _,
    length: t - (_ - u)
  }
}

function $(e, t) {
  return {
    dataOffset: e + h,
    length: t - (h - u)
  }
}

function ee(e, t) {
  let n = G.length;
  return e.getUint16(t) === P && (0, r.hT)(e, t + c, n) === G && 0 === e.getUint8(t + c + n)
}

function et(e, t) {
  let n = e.getUint16(t);
  return n >= N && n <= D || n === L || n === v || n === A || n === I || n === S || n === T || n === C
}

function en(e, t) {
  return e.getUint16(t) === x
}