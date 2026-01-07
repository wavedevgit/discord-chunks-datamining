/** Chunk was on 1272 **/
/** chunk id: 532835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-04_null_experiment",
  label: "Null Experiment",
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
});

function i() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return r.useExperiment({
    location: "a9e81b_1"
  }, {
    autoTrackExposure: e
  })
}