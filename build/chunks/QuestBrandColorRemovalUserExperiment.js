/** Chunk was on 64838 **/
/** chunk id: 192023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk818083 = require("./818083.js");
let s = new Date(Date.UTC(2025, 5, 16)),
  i = (0, Chunk818083.B)({
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

function o(e) {
  let {
    questConfig: t,
    location: n
  } = e, r = l.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= s;
  return i.useExperiment({
    location: n
  }, {
    autoTrackExposure: r
  }).enabled && r
}