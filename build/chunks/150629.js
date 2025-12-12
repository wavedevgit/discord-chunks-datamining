/** Chunk was on web.js **/
/** chunk id: 150629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk822632 = require("./822632.js"),
  Chunk553890 = require("./553890.js"),
  Chunk765859 = require("./765859.js"),
  Chunk554684 = require("./554684.js");
let s = "Exif IFD Pointer",
  l = "GPS Info IFD Pointer",
  c = "Interoperability IFD Pointer",
  u = {
    read: d
  };

function d(e, t, n) {
  let r = i.Z.getByteOrder(e, t),
    o = f(e, t, r, n);
  return {
    tags: o = m(o = _(o = p(o, e, t, r, n), e, t, r, n), e, t, r, n),
    byteOrder: r
  }
}

function f(e, t, n, r) {
  return (0, a.N)(e, o.n1, t, (0, a.a)(e, t, n), n, r)
}

function p(e, t, n, i, l) {
  return true !== e[s] ? (0, r.wB)(e, (0, a.N)(t, o.nR, n, n + e[s].value, i, l)) : e
}

function _(e, t, n, i, s) {
  return true !== e[l] ? (0, r.wB)(e, (0, a.N)(t, o.C9, n, n + e[l].value, i, s)) : e
}

function m(e, t, n, i, s) {
  return true !== e[c] ? (0, r.wB)(e, (0, a.N)(t, o.$8, n, n + e[c].value, i, s)) : e
}