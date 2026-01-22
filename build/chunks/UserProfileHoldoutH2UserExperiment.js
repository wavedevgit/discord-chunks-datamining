/** Chunk was on 42944 **/
/** chunk id: 368629, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
let t = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-07_user_profile_holdout_h2",
  label: "User Profile Holdout H2 Experiment",
  defaultConfig: {
    isInHoldout: false
  },
  treatments: [{
    id: 1,
    label: "Is in holdout",
    config: {
      isInHoldout: true
    }
  }]
});

function l(e) {
  let {
    location: a,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: l
  } = t.useExperiment({
    location: a
  }, {
    autoTrackExposure: n
  });
  return l
}