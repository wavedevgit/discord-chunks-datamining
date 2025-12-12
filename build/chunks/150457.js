/** Chunk was on web.js **/
/** chunk id: 150457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LN: () => s,
  dj: () => p,
  hj: () => l
});
var Chunk798681 = require("./798681.js"),
  Chunk450109 = require("./450109.js");
let o = 10 * require("./70956.js").Z.Millis.SECOND,
  a = 15;

function s() {
  return Chunk798681.w.isIncomingVideoEnabled() && performance.now() - Chunk798681.w.lastIncomingVideoEnabledChangeTime() > o
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a,
    r = i.Z.getAccumulatedPerformanceStats(e, t, "short"),
    o = i.Z.getAccumulatedPerformanceStats(e, t, "long");
  return null == r || null == o || r.numDatapoints < n || o.numDatapoints < n ? null : {
    short: r,
    long: o
  }
}
let c = 30,
  u = 15,
  d = 8,
  f = 3;

function p() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 30;
  return module <= 5 ? f : module <= 15 ? d : module <= 30 ? u : c
}