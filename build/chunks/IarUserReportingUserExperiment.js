/** Chunk was on web.js **/
/** chunk id: 87620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  oV: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-09_iar_user_reporting",
  label: "Safety Experience IAR User Reporting",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).enabled
}