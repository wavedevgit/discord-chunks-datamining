/** Chunk was on web.js **/
/** chunk id: 527269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Do: () => i,
  MM: () => a,
  c9: () => o,
  cv: () => s
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    id: "2025-03_afk_timeout_default_experiment",
    label: "Afk timeout defaults",
    defaultConfig: {
      enabled: false,
      defaultTimeout: 600
    },
    treatments: [{
      id: 1,
      label: "Set afk_timer default to 1 min",
      config: {
        enabled: true,
        defaultTimeout: 60
      }
    }, {
      id: 2,
      label: "Set afk_timer default to 2 min",
      config: {
        enabled: true,
        defaultTimeout: 120
      }
    }, {
      id: 3,
      label: "Set afk_timer default to 1 min (to test with holdout)",
      config: {
        enabled: true,
        defaultTimeout: 60
      }
    }]
  }),
  i = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  a = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).defaultTimeout,
  s = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  o = e => {
    r.trackExposure({
      location: e
    })
  }