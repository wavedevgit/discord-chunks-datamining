/** Chunk was on web.js **/
/** chunk id: 680835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_announcement_composer",
  label: "announcement composer",
  defaultConfig: {
    announcementComposer: false
  },
  treatments: [{
    id: 1,
    label: "show announcement composer",
    config: {
      announcementComposer: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).announcementComposer
}