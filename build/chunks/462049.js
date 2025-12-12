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
let a = 0x66747970,
  s = 0x69707270,
  l = 0x6d657461,
  c = 0x696c6f63,
  u = 0x69696e66,
  d = 0x696e6665,
  f = 0x6970636f,
  p = 0x636f6c72,
  _ = 0x45786966,
  m = 0x6d696d65,
  h = 0x75726920;

function g(e, t) {
  let n = 4,
    r = 8,
    i = 1,
    {
      length: _,
      contentOffset: m
    } = E(e, t);
  if (_ < r) return;
  let h = e.getUint32(t + n);
  if (h === a) return w(e, m, _);
  if (h === s) return D(e, t, m, _);
  if (h === f) return x(e, t, m, _);
  if (h === p) return L(e, m, _);
  let g = e.getUint8(m);
  return h === l ? M(e, t, m + i, _) : h === c ? (0, o.I)(e, g, m + i, _) : h === u ? U(e, t, g, m + i, _) : h === d ? Z(e, t, g, m + i, _) : {
    type: true,
    length: _
  }
}

function E(e, t) {
  let n = 4,
    r = 4,
    i = 8,
    o = 12,
    a = e.getUint32(t);
  return b(a) ? {
    length: e.byteLength - t,
    contentOffset: t + n + r
  } : y(a) && O(e, t) ? {
    length: e.getUint32(t + o),
    contentOffset: t + n + r + i
  } : {
    length: a,
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
      n = S(e);
    return n ? (r.Z.USE_EXIF && (t.tiffHeaderOffset = I(e, n)), r.Z.USE_XMP && (t.xmpChunks = N(n)), r.Z.USE_ICC && (t.iccChunks = R(n)), t.hasAppMarkers = true !== t.tiffHeaderOffset || true !== t.xmpChunks || true !== t.iccChunks, t) : {
      hasAppMarkers: false
    }
  }
  return {}
}

function S(e) {
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

function I(e, t) {
  try {
    let n = T(t).itemId,
      r = C(t, n),
      i = r.baseOffset + r.extents[0].extentOffset;
    return A(e, i)
  } catch (e) {
    return
  }
}

function T(e) {
  return e.subBoxes.find(e => "iinf" === e.type).itemInfos.find(e => e.itemType === _)
}

function C(e, t) {
  return e.subBoxes.find(e => "iloc" === e.type).items.find(e => e.itemId === t)
}

function A(e, t) {
  return t + 4 + e.getUint32(t)
}

function N(e) {
  try {
    let t = P(e).itemId,
      n = C(e, t),
      r = C(e, t).extents[0];
    return [{
      dataOffset: n.baseOffset + r.extentOffset,
      length: r.extentLength
    }]
  } catch (e) {
    return
  }
}

function P(e) {
  return e.subBoxes.find(e => "iinf" === e.type).itemInfos.find(e => e.itemType === m && "application/rdf+xml" === e.contentType)
}

function R(e) {
  try {
    let t = e.subBoxes.find(e => "iprp" === e.type).subBoxes.find(e => "ipco" === e.type).properties.find(e => "colr" === e.type).icc;
    if (t) return [t]
  } catch (e) {}
}

function w(e, t, n) {
  let r = 4;
  return {
    type: "ftyp",
    majorBrand: (0, i.oH)(e, t, r),
    length: n
  }
}

function D(e, t, n, r) {
  return {
    type: "iprp",
    subBoxes: k(e, n, r - (n - t)),
    length: r
  }
}

function x(e, t, n, r) {
  return {
    type: "ipco",
    properties: k(e, n, r - (n - t)),
    length: r
  }
}

function L(e, t, n) {
  return {
    type: "colr",
    icc: j(e, t),
    length: n
  }
}

function j(e, t) {
  let n = 4,
    r = (0, i.oH)(e, t, n);
  if ("prof" === r || "rICC" === r) return {
    offset: t + n,
    length: e.getUint32(t + n),
    chunkNumber: 1,
    chunksTotal: 1
  }
}

function M(e, t, n, r) {
  return {
    type: "meta",
    subBoxes: k(e, n + 3, r - (n + 3 - t)),
    length: r
  }
}

function k(e, t, n) {
  let r = [_, m],
    i = [],
    o = t;
  for (; o < t + n;) {
    let t = g(e, o);
    if (true === t) break;
    true !== t.type && (true === t.itemType || false !== r.indexOf(t.itemType)) && i.push(t), o += t.length
  }
  return i
}

function U(e, t, n, r, i) {
  let {
    offsets: o
  } = G(n, r);
  return {
    type: "iinf",
    itemInfos: k(e, o.itemInfos, i - (o.itemInfos - t)),
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

function Z(e, t, n, r, o) {
  r += 3;
  let a = {
    type: "infe",
    length: o
  };
  return (0 === n || 1 === n) && (a.itemId = e.getUint16(r), r += 2, a.itemProtectionIndex = e.getUint16(r), r += 2, a.itemName = (0, i.o7)(e, r), r += a.itemName.length + 1), n >= 2 && (2 === n ? (a.itemId = e.getUint16(r), r += 2) : 3 === n && (a.itemId = e.getUint32(r), r += 4), a.itemProtectionIndex = e.getUint16(r), r += 2, a.itemType = e.getUint32(r), r += 4, a.itemName = (0, i.o7)(e, r), r += a.itemName.length + 1, a.itemType === m ? (a.contentType = (0, i.o7)(e, r), t + o > (r += a.contentType.length + 1) && (a.contentEncoding = (0, i.o7)(e, r), r += a.contentEncoding.length + 1)) : a.itemType === h && (a.itemUri = (0, i.o7)(e, r), r += a.itemUri.length + 1)), a
}