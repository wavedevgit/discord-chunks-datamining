/** Chunk was on web.js **/
/** chunk id: 28881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QK: () => o,
  u$: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-06_contextless_frames",
    label: "Contextless Frames",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable Contextless Frames",
      config: {
        enabled: true
      }
    }]
  }),
  i = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return r.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    })
  },
  o = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return r.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    })
  }