/** Chunk was on 13478 **/
/** chunk id: 853170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js"),
  Chunk875527 = require("./875527.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_audio_context_menu_refresh",
  label: "Audio context menu refresh experiment",
  defaultConfig: {
    showRefreshedAudioContextMenu: false
  },
  treatments: [{
    id: 1,
    label: "Show refreshed audio context menu",
    config: {
      showRefreshedAudioContextMenu: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }), a = (0, o.Hu)({
    location: t,
    autoTrackExposure: false
  });
  return l.useExperiment({
    location: t
  }, {
    disable: r || a,
    autoTrackExposure: n
  })
}