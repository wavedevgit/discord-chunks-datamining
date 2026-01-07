/** Chunk was on web.js **/
/** chunk id: 918505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JH: () => a,
  o9: () => i,
  w8: () => r
});
let r = (0, require("./818083.js").B)({
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