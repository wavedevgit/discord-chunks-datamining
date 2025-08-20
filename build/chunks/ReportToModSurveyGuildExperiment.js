/** Chunk was on web.js **/
/** chunk id: 863214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2025-04_report_to_mod_survey",
  label: "Report to mod survey",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Show report to mod survey",
    config: {
      enabled: true
    }
  }]
});

function i(e, t) {
  return r.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}