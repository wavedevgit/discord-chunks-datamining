/** Chunk was on 96888 **/
n.d(t, {
  X: () => s
});
var o = n(818083),
  i = n(984134);
let a = (0, o.B)({
  kind: "user",
  id: "2025-02_call_survey_refresh_web",
  label: "Call Survey Refresh (Web)",
  defaultConfig: {
    showRefreshedSurvey: !1
  },
  treatments: [{
    id: 1,
    label: "Show refreshed survey",
    config: {
      showRefreshedSurvey: !0
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: o
  } = i.h.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.useExperiment({
    location: t
  }, {
    disable: o,
    autoTrackExposure: n
  })
}