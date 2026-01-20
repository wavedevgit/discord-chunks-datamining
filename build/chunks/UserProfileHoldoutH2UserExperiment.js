/** Chunk was on 45956 **/
/** chunk id: 438379, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  J: () => l
});
let i = (0, require("./818083.js").B)({
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
    autoTrackExposure: t = true
  } = e, {
    isInHoldout: l
  } = i.useExperiment({
    location: a
  }, {
    autoTrackExposure: t
  });
  return l
}