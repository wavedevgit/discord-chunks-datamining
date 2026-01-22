/** Chunk was on web.js **/
/** chunk id: 951122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jz: () => i,
  kG: () => a,
  y1: () => r
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    label: "Pomelo",
    id: "2023-03_pomelo",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = () => {
    let {
      enabled: e
    } = r.useExperiment({
      location: "faf26d_1"
    }, {
      autoTrackExposure: false
    });
    return e
  },
  a = () => {
    let {
      enabled: e
    } = r.getCurrentConfig({
      location: "faf26d_2"
    }, {
      autoTrackExposure: false
    });
    return e
  }