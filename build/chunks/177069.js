/** Chunk was on 32249 **/
/** chunk id: 177069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let l = (0, Chunk427164.le)({
  name: "2025-09-video-qoe-metrics-tracking",
  kind: "user",
  defaultConfig: {
    externalAnalyticsEnabled: false
  },
  variations: {
    0: {
      externalAnalyticsEnabled: false
    },
    1: {
      externalAnalyticsEnabled: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = o._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? {
    externalAnalyticsEnabled: false
  } : l.getConfig({
    location: t
  })
}