/** Chunk was on web.js **/
/** chunk id: 61196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => r,
  ZP: () => o,
  aW: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2023-06_bogo_promotion_gate",
    label: "BOGO Promotion Manager",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable BOGO Promotion Manager",
      config: {
        enabled: true
      }
    }]
  }),
  i = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return r.getCurrentConfig({
      location: "489551_2"
    }, {
      autoTrackExposure: module
    })
  },
  o = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return r.useExperiment({
      location: "489551_1"
    }, {
      autoTrackExposure: module
    })
  }