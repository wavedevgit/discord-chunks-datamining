/** Chunk was on web.js **/
/** chunk id: 218521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a,
  m: () => i
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk503461 = require("./503461.js");

function i(e, t) {
  let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
  if (n.length >= 1 && n.length <= r.G2) return n;
  throw Error("combination results in an invalid key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
}

function a(e, t) {
  let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
  if (n.length <= r.G2) return n;
  throw Error("combination results in an invalid prefix key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
}