/** Chunk was on 1272 **/
/** chunk id: 711237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J_: () => o,
  R6: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
    kind: "user",
    id: Chunk987338.fL,
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
  a = (0, Chunk818083.B)({
    kind: "guild",
    id: Chunk987338.nz,
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
  o = e => {
    let t = "guild trigger debug",
      n = "user trigger debug";
    a.useExperiment({
      location: t,
      guildId: e
    }, {
      autoTrackExposure: false
    }), a.trackExposure({
      location: t,
      guildId: e
    }), l.useExperiment({
      location: n
    }, {
      autoTrackExposure: false
    }), l.trackExposure({
      location: n
    })
  }