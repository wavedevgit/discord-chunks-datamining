/** Chunk was on web.js **/
/** chunk id: 66340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => i
});
let r = (0, require("./818083.js").B)({
    id: "2025-07_quest_video_retry_enroll",
    kind: "user",
    label: "Quest video retry enroll experiment",
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