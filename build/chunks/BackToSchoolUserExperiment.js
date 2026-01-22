/** Chunk was on 38763 **/
/** chunk id: 664531, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a,
  a: () => l
});
let i = (0, require("./600975.js").C)({
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
  a = i;

function l() {
  return i.getCurrentConfig({
    location: "68acbb_1"
  }, {
    autoTrackExposure: false
  }).enabled
}