/** Chunk was on web.js **/
/** chunk id: 462049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ER: () => g,
  ku: () => v
});
var Chunk791473 = require("./791473.js"),
  Chunk822632 = require("./822632.js"),
  Chunk462468 = require("./462468.js");
let o = 0x66747970,
  s = 0x69707270,
  l = 0x6d657461,
  c = 0x696c6f63,
  u = 0x69696e66,
  d = 0x696e6665,
  f = 0x6970636f,
  _ = 0x636f6c72,
  p = 0x45786966,
  h = 0x6d696d65,
  m = 0x75726920;

function g(e, t) {
  let n = 4,
    r = 8,
    i = 1,
    {
      length: p,
      contentOffset: h
    } = E(e, t);
  if (p < r) return;
  let m = e.getUint32(t + n);
  if (m === o) return D(e, h, p);
  if (m === s) return w(e, t, h, p);
  if (m === f) return L(e, t, h, p);
  if (m === _) return x(e, h, p);
  let g = e.getUint8(h);
  return m === l ? j(e, t, h + i, p) : m === c ? (0, a.I)(e, g, h + i, p) : m === u ? U(e, t, g, h + i, p) : m === d ? B(e, t, g, h + i, p) : {
    type: true,
    length: p
  }
}

function E(e, t) {
  let n = 4,
    r = 4,
    i = 8,
    a = 12,
    o = e.getUint32(t);
  return b(o) ? {
    length: e.byteLength - t,
    contentOffset: t + n + r
  } : y(o) && O(e, t) ? {
    length: e.getUint32(t + a),
    contentOffset: t + n + r + i
  } : {
    length: o,
    contentOffset: t + n + r
  }
}

function b(e) {
  return 0 === e
}

function y(e) {
  return 1 === e
}

function O(e, t) {
  let n = 8;
  return 0 === e.getUint32(t + n)
}

function v(e) {
  if (r.Z.USE_EXIF || r.Z.USE_XMP || r.Z.USE_ICC) {
    let t = {},
      n = I(e);
    return n ? (r.Z.USE_EXIF && (t.tiffHeaderOffset = T(e, n)), r.Z.USE_XMP && (t.xmpChunks = N(n)), r.Z.USE_ICC && (t.iccChunks = P(n)), t.hasAppMarkers = true !== t.tiffHeaderOffset || true !== t.xmpChunks || true !== t.iccChunks, t) : {
      hasAppMarkers: false
    }
  }
  return {}
}

function I(e) {
  let t = 4,
    n = 4,
    r = 0;
  for (; r + t + n <= e.byteLength;) {
    let t = g(e, r);
    if (true === t) break;
    if ("meta" === t.type) return t;
    r += t.length
  }
}

function T(e, t) {
  try {
    let n = S(t).itemId,
      r = A(t, n),
      i = r.baseOffset + r.extents[0].extentOffset;
    return C(e, i)
  } catch (e) {
    return
  }
}

function S(e) {
  return e.subBoxes.find(e => "iinf" === e.type).itemInfos.find(e => e.itemType === p)
}

function A(e, t) {
  return e.subBoxes.find(e => "iloc" === e.type).items.find(e => e.itemId === t)
}

function C(e, t) {
  return t + 4 + e.getUint32(t)
}

function N(e) {
  try {
    let t = R(e).itemId,
      n = A(e, t),
      r = A(e, t).extents[0];
    return [{
      dataOffset: n.baseOffset + r.extentOffset,
      length: r.extentLength
    }]
  } catch (e) {
    return
  }
}

function R(e) {
  return e.subBoxes.find(e => "iinf" === e.type).itemInfos.find(e => e.itemType === h && "application/rdf+xml" === e.contentType)
}

function P(e) {
  try {
    let t = e.subBoxes.find(e => "iprp" === e.type).subBoxes.find(e => "ipco" === e.type).properties.find(e => "colr" === e.type).icc;
    if (t) return [t]
  } catch (e) {}
}

function D(e, t, n) {
  let r = 4;
  return {
    type: "ftyp",
    majorBrand: (0, i.oH)(e, t, r),
    length: n
  }
}

function w(e, t, n, r) {
  return {
    type: "iprp",
    subBoxes: k(e, n, r - (n - t)),
    length: r
  }
}

function L(e, t, n, r) {
  return {
    type: "ipco",
    properties: k(e, n, r - (n - t)),
    length: r
  }
}

function x(e, t, n) {
  return {
    type: "colr",
    icc: M(e, t),
    length: n
  }
}

function M(e, t) {
  let n = 4,
    r = (0, i.oH)(e, t, n);
  if ("prof" === r || "rICC" === r) return {
    offset: t + n,
    length: e.getUint32(t + n),
    chunkNumber: 1,
    chunksTotal: 1
  }
}

function j(e, t, n, r) {
  return {
    type: "meta",
    subBoxes: k(e, n + 3, r - (n + 3 - t)),
    length: r
  }
}

function k(e, t, n) {
  let r = [p, h],
    i = [],
    a = t;
  for (; a < t + n;) {
    let t = g(e, a);
    if (true === t) break;
    true !== t.type && (true === t.itemType || false !== r.indexOf(t.itemType)) && i.push(t), a += t.length
  }
  return i
}

function U(e, t, n, r, i) {
  let {
    offsets: a
  } = G(n, r);
  return {
    type: "iinf",
    itemInfos: k(e, a.itemInfos, i - (a.itemInfos - t)),
    length: i
  }
}

function G(e, t) {
  let n = {
      entryCount: t + 3
    },
    r = {};
  return 0 === e ? r.entryCount = 2 : r.entryCount = 4, n.itemInfos = n.entryCount + r.entryCount, {
    offsets: n
  }
}

function B(e, t, n, r, a) {
  r += 3;
  let o = {
    type: "infe",
    length: a
  };
  return (0 === n || 1 === n) && (o.itemId = e.getUint16(r), r += 2, o.itemProtectionIndex = e.getUint16(r), r += 2, o.itemName = (0, i.o7)(e, r), r += o.itemName.length + 1), n >= 2 && (2 === n ? (o.itemId = e.getUint16(r), r += 2) : 3 === n && (o.itemId = e.getUint32(r), r += 4), o.itemProtectionIndex = e.getUint16(r), r += 2, o.itemType = e.getUint32(r), r += 4, o.itemName = (0, i.o7)(e, r), r += o.itemName.length + 1, o.itemType === h ? (o.contentType = (0, i.o7)(e, r), t + a > (r += o.contentType.length + 1) && (o.contentEncoding = (0, i.o7)(e, r), r += o.contentEncoding.length + 1)) : o.itemType === m && (o.itemUri = (0, i.o7)(e, r), r += o.itemUri.length + 1)), o
}