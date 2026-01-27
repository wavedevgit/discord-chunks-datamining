/** Chunk was on 94682 **/
/** chunk id: 439547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => l
});
let r = (0, require("./600975.js").C)({
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
  l = e => {
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