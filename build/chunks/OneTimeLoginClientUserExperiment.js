/** Chunk was on 86142 **/
/** chunk id: 309165, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  lq: () => i
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    id: "2025-09_one_time_login_client",
    label: "One Time Login",
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
  }),
  i = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  })