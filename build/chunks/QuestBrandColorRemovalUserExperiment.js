/** Chunk was on web.js **/
/** chunk id: 381176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk818083 = require("./818083.js");
let o = new Date(Date.UTC(2025, 5, 16)),
  a = (0, Chunk818083.B)({
    id: "2025-06_quest_brand_color_removal",
    kind: "user",
    label: "Quest Brand Color Removal",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  });

function s(e) {
  let {
    questConfig: t,
    location: n
  } = e, i = r.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= o;
  return a.useExperiment({
    location: n
  }, {
    autoTrackExposure: i
  }).enabled && i
}