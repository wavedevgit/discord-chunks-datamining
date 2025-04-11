/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  a: () => i,
  s: () => u
});
var n = r(818083),
  l = r(984134);
let o = (0, n.B)({
  kind: "user",
  id: "2025-01_go_live_modal_refresh",
  label: "Go Live Modal Refresh",
  defaultConfig: {
    showRefreshedGoLiveModal: !1,
    twoClickVariant: !1
  },
  treatments: [{
    id: 1,
    label: "Show refreshed go live modal",
    config: {
      showRefreshedGoLiveModal: !0,
      twoClickVariant: !1
    }
  }, {
    id: 2,
    label: "Show refreshed go live modal, 2 click variant",
    config: {
      showRefreshedGoLiveModal: !0,
      twoClickVariant: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: r = !0
  } = e, {
    isInHoldout: n
  } = l.h.useExperiment({
    location: t
  }, {
    autoTrackExposure: r
  });
  return o.useExperiment({
    location: t
  }, {
    disable: n,
    autoTrackExposure: r
  })
}

function u(e) {
  l.h.getCurrentConfig({
    location: e
  }).isInHoldout || o.trackExposure({
    location: e
  })
}