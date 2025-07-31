/** Chunk was on 46355 **/
r.d(t, {
  C$: () => o
});
let n = (0, r(818083).B)({
  kind: "user",
  id: "2025-04_ignore_user_feedback",
  label: "Ignore User Feedback Experiment",
  defaultConfig: {
    enabled: !1,
    shouldGetShorterIgnoreDuration: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Ignore User Feedback Survey",
    config: {
      enabled: !0,
      shouldGetShorterIgnoreDuration: !1
    }
  }, {
    id: 2,
    label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
    config: {
      enabled: !0,
      shouldGetShorterIgnoreDuration: !0
    }
  }]
});

function o(e) {
  return n.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  })
}