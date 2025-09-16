/** Chunk was on web.js **/
/** chunk id: 883794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk427164.le)({
  kind: "user",
  name: "2025-09-agc2-v2",
  defaultConfig: {
    noiseCancellationDuringProcessing: false,
    noiseCancellationConfig: {
      useAGC2: false
    }
  },
  variations: {
    1: {
      noiseCancellationDuringProcessing: true,
      noiseCancellationConfig: {
        useAGC2: false
      }
    },
    2: {
      noiseCancellationDuringProcessing: true,
      noiseCancellationConfig: {
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
    }
  }
});

function o(e) {
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}