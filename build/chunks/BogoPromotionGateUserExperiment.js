/** Chunk was on web.js **/
/** chunk id: 196042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => a,
  fy: () => i,
  oy: () => r
});
let r = (0, require("./600975.js").C)({
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
      autoTrackExposure: e
    })
  },
  a = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return r.useExperiment({
      location: "489551_1"
    }, {
      autoTrackExposure: e
    })
  }