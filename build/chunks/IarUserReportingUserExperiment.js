/** Chunk was on web.js **/
/** chunk id: 447872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  So: () => i
});
let r = (0, require("./600975.js").C)({
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