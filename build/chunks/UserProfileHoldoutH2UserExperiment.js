/** Chunk was on 93886 **/
/** chunk id: 438379, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  J: () => r
});
let n = (0, require("./818083.js").B)({
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

function r(e) {
  let {
    location: t,
    autoTrackExposure: a = true
  } = e, {
    isInHoldout: r
  } = n.useExperiment({
    location: t
  }, {
    autoTrackExposure: a
  });
  return r
}