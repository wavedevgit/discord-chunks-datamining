/** Chunk was on web.js **/
/** chunk id: 422037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D0: () => o,
  FJ: () => a,
  Mm: () => l,
  Zx: () => c
});
var Chunk21814 = require("./21814.js"),
  Chunk752689 = require("./752689.js");

function a(e) {
  return (0, r.ad)() ? e.altKey : e.ctrlKey
}

function o(e, t) {
  var n, r;
  let i = `[data-key="${CSS.escape(String(t))}"]`,
    a = null == (n = e.current) ? true : n.dataset.collection;
  return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? true : r.querySelector(i)
}
let s = new WeakMap;

function l(e) {
  let t = (0, i.Me)();
  return s.set(e, t), t
}

function c(e) {
  return s.get(e)
}