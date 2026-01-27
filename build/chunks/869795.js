/** Chunk was on web.js **/
/** chunk id: 869795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EG: () => c,
  N9: () => a,
  au: () => o,
  j5: () => l
});
var Chunk408713 = require("./408713.js"),
  Chunk723906 = require("./723906.js");

function a(e) {
  return (0, r.lg)() ? e.altKey : e.ctrlKey
}

function o(e, t) {
  var n, r;
  let i = `[data-key="${CSS.escape(String(t))}"]`,
    a = null == (n = e.current) ? true : n.dataset.collection;
  return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? true : r.querySelector(i)
}
let s = new WeakMap;

function l(e) {
  let t = (0, i.Bi)();
  return s.set(e, t), t
}

function c(e) {
  return s.get(e)
}