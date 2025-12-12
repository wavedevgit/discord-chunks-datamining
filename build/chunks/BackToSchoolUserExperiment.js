/** Chunk was on 98639 **/
/** chunk id: 645792, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => o,
  b: () => i
});
let n = (0, require("./818083.js").B)({
    kind: "user",
    id: "2022-08_back_to_school",
    label: "Back to School Event",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Back to School experience enabled",
      config: {
        enabled: true
      }
    }]
  }),
  o = n;

function i() {
  return n.getCurrentConfig({
    location: "68acbb_1"
  }, {
    autoTrackExposure: false
  }).enabled
}