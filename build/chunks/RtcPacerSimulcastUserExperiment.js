/** Chunk was on web.js **/
/** chunk id: 926951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./35282.js");
var Chunk818083 = require("./818083.js");
let i = "bandwidth_estimation",
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-06_rtc_pacer__simulcast",
    label: "RTC Pacer & Golive Simulcast",
    defaultConfig: {
      enabled: true,
      fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
      simulcastEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Golive Simulcast without prober 720p@500k",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
        simulcastEnabled: true
      }
    }, {
      id: 2,
      label: "Golive Simulcast 720p@500k",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
        simulcastEnabled: true
      }
    }, {
      id: 3,
      label: "Golive with pacing",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer",
        simulcastEnabled: false
      }
    }, {
      id: 4,
      label: "Golive with pacing and probing",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
        simulcastEnabled: false
      }
    }, {
      id: 5,
      label: "Golive Simulcast 720p@750k",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k",
        simulcastEnabled: true
      }
    }, {
      id: 6,
      label: "Golive Simulcast 720p@1000k",
      config: {
        enabled: true,
        fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k",
        simulcastEnabled: true
      }
    }]
  }),
  o = {
    getConfig(e, t) {
      let n = a.getCurrentConfig({
        location: "e1c55b_1"
      }, {
        autoTrackExposure: e
      });
      return this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) || (n.enabled = false), n
    },
    supportsBandwidthEstimationExperimentFullname(e, t) {
      let n = this.getMediaEngineExperiments(e);
      if (null === n) returnfalse;
      for (let e of n)
        if (!t.includes(e)) returnfalse;
      returntrue
    },
    getMediaEngineExperiments(e) {
      let t = e.split("/");
      return 3 !== t.length || t[0] !== i ? null : t[1].split(",").filter(e => 0 !== e.length)
    }
  }