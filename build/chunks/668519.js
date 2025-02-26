/** Chunk was on 63354 **/
"use strict";
n.d(t, {
  a: () => i
});
var o = n(818083),
  r = n(984134);
let c = (0, o.B)({
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
    isInHoldout: o
  } = r.h.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return c.useExperiment({
    location: t
  }, {
    disable: o,
    autoTrackExposure: n
  })
}