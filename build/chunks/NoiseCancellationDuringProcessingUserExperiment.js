/** Chunk was on web.js **/
/** chunk id: 839758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_noise_cancellation_during_processing",
  label: "Noise Cancellation During WebRTC Processing",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true,
    disable: r = false
  } = e, {
    isInHoldout: a
  } = i.L.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: r || a,
    autoTrackExposure: n
  })
}