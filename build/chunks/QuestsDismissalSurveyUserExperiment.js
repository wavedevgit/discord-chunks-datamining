/** Chunk was on web.js **/
/** chunk id: 972495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
});
let r = (0, require("./600975.js").C)({
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