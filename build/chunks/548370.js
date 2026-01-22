/** Chunk was on web.js **/
/** chunk id: 548370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D$: () => o,
  s1: () => p,
  xA: () => l
});
var Chunk808180 = require("./808180.js"),
  Chunk624694 = require("./624694.js");
let a = 10 * require("./927813.js").A.Millis.SECOND,
  s = 15;

function o() {
  return r.X.isIncomingVideoEnabled() && performance.now() - r.X.lastIncomingVideoEnabledChangeTime() > a
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s,
    r = i.A.getAccumulatedPerformanceStats(e, t, "short"),
    a = i.A.getAccumulatedPerformanceStats(e, t, "long");
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