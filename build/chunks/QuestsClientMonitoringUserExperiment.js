/** Chunk was on web.js **/
/** chunk id: 628473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => i
});
let r = (0, require("./600975.js").C)({
    id: "2024-03_quests_client_monitoring",
    kind: "user",
    label: "Quests client monitoring experiment",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "disabled",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled