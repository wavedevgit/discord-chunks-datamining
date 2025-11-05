/** Chunk was on 96413 **/
/** chunk id: 138182, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => s
});
let i = (0, require("./818083.js").B)({
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
  s = e => {
    let {
      location: t,
      autoTrackExposure: r = true
    } = e;
    return i.useExperiment({
      location: t
    }, {
      autoTrackExposure: r
    })
  }