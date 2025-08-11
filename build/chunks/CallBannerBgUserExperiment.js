/** Chunk was on web.js **/
/** chunk id: 420596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-10_call_banner_bg",
  label: "Call Banner Background Experiment",
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

function i(e, t) {
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: e
  })
}