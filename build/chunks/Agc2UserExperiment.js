/** Chunk was on web.js **/
/** chunk id: 883794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_agc2",
  label: "WebRTC AGC2",
  defaultConfig: {
    useAGC2: false
  },
  treatments: [{
    id: 1,
    label: "WebRTC defaults",
    config: {
      useAGC2: true,
      enableAnalog: false,
      enableDigital: true,
      headroom_db: 5,
      max_gain_db: 50,
      initial_gain_db: 15,
      max_gain_change_db_per_second: 6,
      max_output_noise_level_dbfs: false,
      fixed_gain_db: 0
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