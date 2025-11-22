/** Chunk was on web.js **/
/** chunk id: 775065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => i
});
let r = (0, require("./818083.js").B)({
    id: "2024-10_quests_dismissal_survey",
    kind: "user",
    label: "Quests Dismissal Survey",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  }