/** Chunk was on web.js **/
/** chunk id: 128064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c_: () => i,
  pY: () => a
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-06_settings_defaults_aggregate",
    label: "Settings Defaults Aggregate",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Aggregate Settings Default",
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
  a = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled