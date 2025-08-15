/** Chunk was on web.js **/
/** chunk id: 679613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_device_affinity",
  label: "Device affinity experiment",
  defaultConfig: {
    shouldSortDevicesByFrecency: false
  },
  treatments: [{
    id: 1,
    label: "Sort devices by frecency",
    config: {
      shouldSortDevicesByFrecency: true
    }
  }]
});

function o(e) {
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
  return a.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}