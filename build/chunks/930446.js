/** Chunk was on web.js **/
/** chunk id: 930446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => u,
  Gy: () => c
});
var Chunk772848 = require("./772848.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk686325 = require("./686325.js");
let s = 12 * Chunk70956.Z.Millis.HOUR,
  l = null;

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = Date.now();
  return null == l || d(l) ? l = {
    uuid: (0, Chunk772848.Z)(),
    createdAtTimestamp: exports,
    lastUsedTimestamp: exports,
    version: Chunk686325.EI
  } : (module && (l.lastUsedTimestamp = exports), l)
}

function u() {
  l = null
}

function d(e) {
  let t = Date.now();
  if (t < e.createdAtTimestamp) return a.Z.addBreadcrumb({
    category: "ad",
    message: "future facing timestamp Date.now(): ".concat(t, ", initialized timestamp: ").concat(e.createdAtTimestamp)
  }), true;
  let n = t - e.lastUsedTimestamp > o.XM,
    r = t - e.createdAtTimestamp > s;
  return n || r
}