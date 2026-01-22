/** Chunk was on 21738 **/
/** chunk id: 16099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => i
});
let r = (0, require("./600975.js").C)({
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