/** Chunk was on 96977 **/
n.d(t, {
  A: () => r,
  P: () => o
});
let i = (0, n(818083).B)({
  kind: "user",
  id: "2025-03_user_profile_editing_holdout_h1",
  label: "User Profile Editing Holdout Experiment",
  defaultConfig: {
    isInHoldout: !1
  },
  treatments: [{
    id: 1,
    label: "Is in Holdout",
    config: {
      isInHoldout: !0
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: o
  } = i.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o
}

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: o
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o
}