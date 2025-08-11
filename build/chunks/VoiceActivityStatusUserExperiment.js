/** Chunk was on web.js **/
/** chunk id: 468363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-02_voice_activity_status",
    label: "Voice Activity Status",
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