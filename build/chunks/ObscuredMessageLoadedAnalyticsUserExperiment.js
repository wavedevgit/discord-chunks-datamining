/** Chunk was on web.js **/
/** chunk id: 590773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-03_obscured_message_loaded_analytics",
  label: "Obscured message loaded analytics",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enables the experiment",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "686da2_1"
  }, {
    autoTrackExposure: true
  });
  return e
}