/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2024-07_bogo_countdown",
    label: "BOGO Countdown Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Disable BOGO countdown",
      config: {
        enabled: !0
      }
    }]
  }),
  i = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return r.useExperiment({
      location: "489551_3"
    }, {
      autoTrackExposure: e
    })
  }