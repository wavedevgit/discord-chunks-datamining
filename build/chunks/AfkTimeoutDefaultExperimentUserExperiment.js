/** Chunk was on web.js **/
/** chunk id: 291741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dl: () => s,
  Mk: () => a,
  fD: () => o,
  mO: () => i
});
let r = (0, require("./818083.js").B)({
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
  o = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).defaultTimeout,
  a = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  s = e => {
    r.trackExposure({
      location: e
    })
  }