/** Chunk was on web.js **/
/** chunk id: 956484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk463424 = require("./463424.js"),
  Chunk684667 = require("./684667.js"),
  Chunk692764 = require("./692764.js"),
  Chunk267236 = require("./267236.js");
let s = "Exif IFD Pointer",
  l = "GPS Info IFD Pointer",
  c = "Interoperability IFD Pointer",
  u = {
    read: d
  };

function d(e, t, n) {
  let r = i.Z.getByteOrder(e, t),
    a = f(e, t, r, n);
  return {
    tags: a = h(a = p(a = _(a, e, t, r, n), e, t, r, n), e, t, r, n),
    byteOrder: r
  }
}

function f(e, t, n, r) {
  return (0, o.N)(e, a.n1, t, (0, o.a)(e, t, n), n, r)
}

function _(e, t, n, i, l) {
  return true !== e[s] ? (0, r.wB)(e, (0, o.N)(t, a.nR, n, n + e[s].value, i, l)) : e
}

function p(e, t, n, i, s) {
  return true !== e[l] ? (0, r.wB)(e, (0, o.N)(t, a.C9, n, n + e[l].value, i, s)) : e
}

function h(e, t, n, i, s) {
  return true !== e[c] ? (0, r.wB)(e, (0, o.N)(t, a.$8, n, n + e[c].value, i, s)) : e
}