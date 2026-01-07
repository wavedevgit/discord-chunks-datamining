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
let a = 10 * require("./70956.js").Z.Millis.SECOND,
  o = 15;

function s() {
  return r.w.isIncomingVideoEnabled() && performance.now() - r.w.lastIncomingVideoEnabledChangeTime() > a
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o,
    r = i.Z.getAccumulatedPerformanceStats(e, t, "short"),
    a = i.Z.getAccumulatedPerformanceStats(e, t, "long");
  return null == r || null == a || r.numDatapoints < n || a.numDatapoints < n ? null : {
    short: r,
    long: a
  }
}
let c = 30,
  u = 15,
  d = 8,
  f = 3;

function p() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 30;
  return e <= 5 ? f : e <= 15 ? d : e <= 30 ? u : c
}