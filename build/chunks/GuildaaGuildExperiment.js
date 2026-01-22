/** Chunk was on 21738 **/
/** chunk id: 512155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tc: () => a,
  tz: () => i
});
var Chunk600975 = require("./600975.js");
let i = (0, Chunk600975.C)({
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
  l = (0, Chunk600975.C)({
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