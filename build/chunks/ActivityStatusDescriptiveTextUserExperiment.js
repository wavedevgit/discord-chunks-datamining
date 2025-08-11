/** Chunk was on web.js **/
/** chunk id: 802529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => i
});
let r = (0, require("./818083.js").B)({
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