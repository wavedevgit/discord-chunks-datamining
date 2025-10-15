/** Chunk was on 27978 **/
/** chunk id: 551549, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  oK: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-09_iar_dsa_webform",
  label: "Safety Experience Unauthenticated Report Form",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "EU user",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "DSA E2E testing user",
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