/** Chunk was on 86029 **/
n.d(t, {
  a: () => o
});
var r = n(818083),
  i = n(984134);
let l = (0, r.B)({
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

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    isInHoldout: r
  } = i.h.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}