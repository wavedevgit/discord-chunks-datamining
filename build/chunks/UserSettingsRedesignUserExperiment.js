/** Chunk was on web.js **/
/** chunk id: 526665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  wy: () => o,
  yP: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-06_user_settings_redesign",
    label: "User Settings Redesign",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable user settings redesign",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  o = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled