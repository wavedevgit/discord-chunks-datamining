/** Chunk was on web.js **/
/** chunk id: 865364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk977156 = require("./977156.js");
let a = (0, Chunk818083.B)({
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
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = false
    } = e, r = (0, i.Zy)({
      location: t
    }), {
      enabled: o
    } = a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return r && o
  }