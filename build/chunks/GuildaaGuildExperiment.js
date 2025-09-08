/** Chunk was on 1272 **/
/** chunk id: 711237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J_: () => a,
  R6: () => i
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-10_triggerdebuggingaa",
    label: "Trigger Debugging User AA Experiment",
    defaultConfig: {
      inUse: false
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: true
      }
    }]
  }),
  l = (0, Chunk818083.B)({
    kind: "guild",
    id: "2023-10_guildaa",
    label: "Trigger Debugging Guild AA Experiment",
    defaultConfig: {
      inUse: false
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: true
      }
    }]
  }),
  a = e => {
    let t = "guild trigger debug",
      n = "user trigger debug";
    l.useExperiment({
      location: t,
      guildId: e
    }, {
      autoTrackExposure: false
    }), l.trackExposure({
      location: t,
      guildId: e
    }), i.useExperiment({
      location: n
    }, {
      autoTrackExposure: false
    }), i.trackExposure({
      location: n
    })
  }