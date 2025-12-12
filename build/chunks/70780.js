/** Chunk was on web.js **/
/** chunk id: 70780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o,
  o: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");

function o(e) {
  return r.tn.get({
    url: "".concat("https:").concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT, "?v=").concat(e),
    rejectWithError: false
  })
}

function a(e, t) {
  i.Z.dispatch({
    type: "RTC_LATENCY_TEST_COMPLETE",
    latencyRankedRegions: e,
    geoRankedRegions: t
  })
}