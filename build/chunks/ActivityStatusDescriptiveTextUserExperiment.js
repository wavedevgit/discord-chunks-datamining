/** Chunk was on web.js **/
/** chunk id: 412242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => i
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    id: "2025-03_activity_status_descriptive_text",
    label: "Activity Status Descriptive Text",
    defaultConfig: {
      descriptiveTextEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Descriptive text enabled",
      config: {
        descriptiveTextEnabled: true
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