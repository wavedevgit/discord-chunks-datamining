/** Chunk was on web.js **/
/** chunk id: 525286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    id: "2024-10_golive_simulcast",
    label: "GoLive Simulcast",
    defaultConfig: {
      simulcastEnabled: false,
      lqStreamBitrate: 0
    },
    treatments: [{
      id: 1,
      label: "Simulcast",
      config: {
        simulcastEnabled: true,
        lqStreamBitrate: 15e5
      }
    }, {
      id: 2,
      label: "Simulcast, no pacer for LQ",
      config: {
        simulcastEnabled: true,
        lqStreamBitrate: 15e5,
        workerExperimentString: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-lq-no-pacer"
      }
    }]
  }),
  i = {
    getConfig: () => r.getCurrentConfig({
      location: "getConfig"
    }, {
      autoTrackExposure: false
    }),
    simulcastEnabled: () => r.getCurrentConfig({
      location: "simulcastEnabled"
    }, {
      autoTrackExposure: true
    }).simulcastEnabled,
    workerExperimentString: () => r.getCurrentConfig({
      location: "workerExperimentString"
    }, {
      autoTrackExposure: false
    }).workerExperimentString
  }