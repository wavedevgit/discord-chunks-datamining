/** Chunk was on web.js **/
/** chunk id: 17300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk128319 = require("./128319.js");
let a = {
    useAGC2: true,
    enableAnalog: false,
    enableDigital: true,
    headroom_db: 5,
    max_gain_db: 50,
    initial_gain_db: 15,
    max_gain_change_db_per_second: 6,
    max_output_noise_level_dbfs: false,
    fixed_gain_db: 0
  },
  o = (0, Chunk945810.mj)({
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
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .5
      },
      3: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .7
      },
      4: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .8
      },
      5: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .9
      },
      6: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .95
      }
    }
  });

function s(e) {
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.p.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}