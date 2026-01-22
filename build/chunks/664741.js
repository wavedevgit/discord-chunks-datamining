/** Chunk was on web.js **/
/** chunk id: 664741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk643479 = require("./643479.js"),
  Chunk890167 = require("./890167.js"),
  Chunk105423 = require("./105423.js"),
  Chunk801765 = require("./801765.js");
let o = "Exif IFD Pointer",
  l = "GPS Info IFD Pointer",
  c = "Interoperability IFD Pointer",
  u = {
    read: d
  };

function d(e, t, n) {
  let r = i.A.getByteOrder(e, t),
    a = f(e, t, r, n);
  return {
    tags: a = h(a = _(a = p(a, e, t, r, n), e, t, r, n), e, t, r, n),
    byteOrder: r
  }
}

function f(e, t, n, r) {
  return (0, s.y)(e, a.eY, t, (0, s.x)(e, t, n), n, r)
}

function p(e, t, n, i, l) {
  return true !== e[o] ? (0, r.dP)(e, (0, s.y)(t, a.Ct, n, n + e[o].value, i, l)) : e
}

function _(e, t, n, i, o) {
  return true !== e[l] ? (0, r.dP)(e, (0, s.y)(t, a.eU, n, n + e[l].value, i, o)) : e
}

function h(e, t, n, i, o) {
  return true !== e[c] ? (0, r.dP)(e, (0, s.y)(t, a.MJ, n, n + e[c].value, i, o)) : e
}