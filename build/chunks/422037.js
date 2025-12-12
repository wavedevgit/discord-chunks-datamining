/** Chunk was on web.js **/
/** chunk id: 422037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D0: () => a,
  FJ: () => o,
  Mm: () => l,
  Zx: () => c
});
var Chunk21814 = require("./21814.js"),
  Chunk752689 = require("./752689.js");

function o(e) {
  return (0, r.ad)() ? e.altKey : e.ctrlKey
}

function a(e, t) {
  var n, r;
  let i = `[data-key="${CSS.escape(String(t))}"]`,
    o = null == (n = e.current) ? true : n.dataset.collection;
  return o && (i = `[data-collection="${CSS.escape(o)}"]${i}`), null == (r = e.current) ? true : r.querySelector(i)
}
let s = new WeakMap;

function l(e) {
  let t = (0, i.Me)();
  return s.set(e, t), t
}

function c(e) {
  return s.get(e)
}