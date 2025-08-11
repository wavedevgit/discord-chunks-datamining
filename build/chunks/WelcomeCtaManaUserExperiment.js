/** Chunk was on web.js **/
/** chunk id: 223750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => i
});
let r = (0, require("./818083.js").B)({
  id: "2025-07_welcome_cta_mana",
  label: "Welcome CTA using Mana buttons",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Using Mana buttons",
    config: {
      enabled: true
    }
  }]
});

function i() {
  return r.useExperiment({
    location: "welcome CTA"
  }, {
    autoTrackExposure: true
  }).enabled
}