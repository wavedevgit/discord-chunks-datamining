/** Chunk was on 7384 **/
/** chunk id: 406613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-01_voice_and_video_settings_refresh",
  label: "Voice and Video Settings Refresh",
  defaultConfig: {
    showRefreshedSettings: false
  },
  treatments: [{
    id: 1,
    label: "Show refreshed settings",
    config: {
      showRefreshedSettings: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}