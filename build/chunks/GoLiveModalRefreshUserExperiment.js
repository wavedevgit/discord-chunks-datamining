/** Chunk was on 64271 **/
/** chunk id: 668519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-01_go_live_modal_refresh",
  label: "Go Live Modal Refresh",
  defaultConfig: {
    showRefreshedGoLiveModal: false
  },
  treatments: [{
    id: 1,
    label: "Show refreshed go live modal",
    config: {
      showRefreshedGoLiveModal: true
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.useExperiment({
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