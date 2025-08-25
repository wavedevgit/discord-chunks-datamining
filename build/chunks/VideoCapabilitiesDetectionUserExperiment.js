/** Chunk was on web.js **/
/** chunk id: 544406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk504876 = require("./504876.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-03_video_capabilities_detection",
  label: "Video capabilities detection and reporting",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Control - Capabilities detection disabled",
    config: {
      enabled: false
    }
  }, {
    id: 2,
    label: "Capabilities detection enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}