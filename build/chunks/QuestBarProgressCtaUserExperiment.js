/** Chunk was on 9885 **/
/** chunk id: 865364, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk977156 = require("./977156.js");
let o = (0, Chunk818083.B)({
    id: "2024-03_quest_bar_progress_cta",
    kind: "user",
    label: "Quest Bar Progress CTA",
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
      label: "Quest Bar Progress CTA enabled",
      config: {
        enabled: true
      }
    }]
  }),
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = false
    } = e, r = (0, s.Zy)({
      location: t
    }), {
      enabled: a
    } = o.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return r && a
  }