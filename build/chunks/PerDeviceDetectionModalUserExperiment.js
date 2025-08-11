/** Chunk was on 30042 **/
/** chunk id: 465322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_per_device_detection_modal",
  label: "Per-device detection modal experiment",
  defaultConfig: {
    optOutPerDevice: false
  },
  treatments: [{
    id: 1,
    label: "Opt-out of the detection modal on a per-device basis",
    config: {
      optOutPerDevice: true
    }
  }]
});

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = a.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.useExperiment({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}