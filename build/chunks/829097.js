/** Chunk was on 23628 **/
/** chunk id: 829097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => i
});
var Chunk945810 = require("./945810.js"),
  Chunk332628 = require("./332628.js");
let o = (0, Chunk945810.mj)({
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
  } = l.i.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? {
    externalAnalyticsEnabled: false
  } : o.getConfig({
    location: t
  })
}