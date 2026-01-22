/** Chunk was on web.js **/
/** chunk id: 122997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-02_hide_member_list_activities",
  label: "Hide member list activities",
  defaultConfig: {
    hideActivities: false
  },
  treatments: [{
    id: 1,
    label: "Enabled (hide activities)",
    config: {
      hideActivities: true
    }
  }]
});

function i(e) {
  return r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  }).hideActivities
}