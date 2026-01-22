/** Chunk was on web.js **/
/** chunk id: 677402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a,
  s: () => i
});
let r = (0, require("./600975.js").C)({
    id: "2023-12_quests",
    kind: "user",
    label: "Quests",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Quests enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  },
  a = e => {
    let {
      location: t
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  }