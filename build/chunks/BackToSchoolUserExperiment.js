/** Chunk was on 53900 **/
/** chunk id: 645792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l,
  b: () => a
});
let i = (0, require("./818083.js").B)({
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
  l = i;

function a() {
  return i.getCurrentConfig({
    location: "68acbb_1"
  }, {
    autoTrackExposure: false
  }).enabled
}