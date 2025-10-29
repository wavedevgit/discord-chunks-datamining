/** Chunk was on 72651 **/
/** chunk id: 138182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-02_voice_activity_status_mobile",
    label: "Voice Activity Status (Mobile)",
    defaultConfig: {
      voiceActivityStatusEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Voice Activity Status Enabled",
      config: {
        voiceActivityStatusEnabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = true
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  }