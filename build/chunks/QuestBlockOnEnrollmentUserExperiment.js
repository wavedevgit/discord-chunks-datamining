/** Chunk was on web.js **/
/** chunk id: 111131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => i
});
let r = (0, require("./818083.js").B)({
    id: "2025-04_quest_block_on_enrollment",
    kind: "user",
    label: "Video Quest Block On Enrollment",
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
  i = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  }).enabled