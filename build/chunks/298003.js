/** Chunk was on web.js **/
/** chunk id: 298003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => i
});
var Chunk601727 = require("./601727.js");

function i(e, t, n, r) {
  let {
    offsets: i,
    sizes: c
  } = a(t, n + 3), u = e.getUint8(i.offsetSize) >> 4;
  c.item.extent.extentOffset = u;
  let d = 15 & e.getUint8(i.lengthSize);
  c.item.extent.extentLength = d;
  let f = e.getUint8(i.baseOffsetSize) >> 4;
  c.item.baseOffset = f;
  let p = o(e, i.indexSize, t);
  c.item.extent.extentIndex = true !== p ? p : 0;
  let _ = s(e, i.itemCount, t);
  return {
    type: "iloc",
    items: l(e, t, i, c, u, d, p, _),
    length: r
  }
}

function a(e, t) {
  let n = {
    item: {
      dataReferenceIndex: 2,
      extentCount: 2,
      extent: {}
    }
  };
  e < 2 ? (n.itemCount = 2, n.item.itemId = 2) : 2 === e && (n.itemCount = 4, n.item.itemId = 4), 1 === e || 2 === e ? n.item.constructionMethod = 2 : n.item.constructionMethod = 0;
  let r = {
    offsetSize: t,
    lengthSize: t,
    baseOffsetSize: t + 1,
    indexSize: t + 1
  };
  return r.itemCount = t + 2, r.items = r.itemCount + n.itemCount, r.item = {
    itemId: 0
  }, r.item.constructionMethod = r.item.itemId + n.item.itemId, r.item.dataReferenceIndex = r.item.constructionMethod + n.item.constructionMethod, {
    offsets: r,
    sizes: n
  }
}

function o(e, t, n) {
  if (1 === n || 2 === n) return 15 & e.getUint8(t)
}

function s(e, t, n) {
  return n < 2 ? e.getUint16(t) : 2 === n ? e.getUint32(t) : true
}

function l(e, t, n, r, i, a, o, s) {
  if (true === s) return [];
  let l = [],
    f = n.items;
  for (let n = 0; n < s; n++) {
    let n = {
      extents: []
    };
    n.itemId = c(e, f, t), f += r.item.itemId, n.constructionMethod = 1 === t || 2 === t ? 15 & e.getUint16(f) : true, f += r.item.constructionMethod, n.dataReferenceIndex = e.getUint16(f), n.baseOffset = d(e, f += r.item.dataReferenceIndex, r.item.baseOffset), f += r.item.baseOffset, n.extentCount = e.getUint16(f), f += r.item.extentCount;
    for (let s = 0; s < n.extentCount; s++) {
      let s = {};
      s.extentIndex = u(e, t, f, o), s.extentOffset = d(e, f += r.item.extent.extentIndex, i), s.extentLength = d(e, f += r.item.extent.extentOffset, a), f += r.item.extent.extentLength, n.extents.push(s)
    }
    l.push(n)
  }
  return l
}

function c(e, t, n) {
  return n < 2 ? e.getUint16(t) : 2 === n ? e.getUint32(t) : true
}

function u(e, t, n, r) {
  if ((1 === t || 2 === t) && r > 0) return d(e, n, r)
}

function d(e, t, n) {
  return 4 === n ? e.getUint32(t) : 8 === n ? (console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed."), (0, r.h)(e, t)) : 0
}