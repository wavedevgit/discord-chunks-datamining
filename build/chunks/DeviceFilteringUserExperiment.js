/** Chunk was on web.js **/
/** chunk id: 996897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_device_filtering",
  label: "Device filtering experiment",
  defaultConfig: {
    shouldFilterDevicesByFrecency: false
  },
  treatments: [{
    id: 1,
    label: "Filter devices by frecency",
    config: {
      shouldFilterDevicesByFrecency: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}