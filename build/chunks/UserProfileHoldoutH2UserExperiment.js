/** Chunk was on 20545 **/
/** chunk id: 368629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => l
});
let i = (0, require("./600975.js").C)({
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
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: l
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l
}