/** Chunk was on web.js **/
/** chunk id: 881615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Db: () => u,
  sN: () => c
});
var Chunk835245 = require("./835245.js"),
  Chunk927813 = require("./927813.js"),
  Chunk728458 = require("./728458.js"),
  Chunk604594 = require("./604594.js");
let s = 12 * Chunk927813.A.Millis.HOUR,
  l = null;

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = Date.now();
  return null == l || d(l) ? l = {
    uuid: (0, r.A)(),
    createdAtTimestamp: t,
    lastUsedTimestamp: t,
    version: o.Ir
  } : (e && (l.lastUsedTimestamp = t), l)
}

function u() {
  l = null
}

function d(e) {
  let t = Date.now();
  if (t < e.createdAtTimestamp) return a.A.addBreadcrumb({
    category: "ad",
    message: "future facing timestamp Date.now(): ".concat(t, ", initialized timestamp: ").concat(e.createdAtTimestamp)
  }), true;
  let n = t - e.lastUsedTimestamp > o.jj,
    r = t - e.createdAtTimestamp > s;
  return n || r
}