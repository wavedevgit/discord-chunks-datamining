/** Chunk was on web.js **/
/** chunk id: 197094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a,
  b: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js");

function a(e) {
  return r.Bo.get({
    url: "".concat("https:").concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT, "?v=").concat(e),
    rejectWithError: false
  })
}

function o(e, t) {
  i.h.dispatch({
    type: "RTC_LATENCY_TEST_COMPLETE",
    latencyRankedRegions: e,
    geoRankedRegions: t
  })
}