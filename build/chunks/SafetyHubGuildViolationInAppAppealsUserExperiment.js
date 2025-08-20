/** Chunk was on web.js **/
/** chunk id: 364226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-02_safety_hub_guild_violation_in_app_appeals",
  label: "Safety Hub Guild Violation In App Appeals",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allow guild violations to be applied using the new appeals ingestion flow",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return !!r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).enabled
}