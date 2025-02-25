/** Chunk was on 79477 **/
n.d(t, {
  a: () => i
});
var l = n(818083),
  r = n(984134);
let s = (0, l.B)({
  kind: "user",
  id: "2025-01_go_live_modal_refresh",
  label: "Go Live Modal Refresh",
  defaultConfig: {
    showRefreshedGoLiveModal: !1
  },
  treatments: [{
    id: 1,
    label: "Show refreshed go live modal",
    config: {
      showRefreshedGoLiveModal: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: l
  } = r.h.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: l,
    autoTrackExposure: n
  })
}