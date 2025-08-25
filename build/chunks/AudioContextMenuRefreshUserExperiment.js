/** Chunk was on web.js **/
/** chunk id: 853170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js"),
  Chunk875527 = require("./875527.js");
let a = (0, Chunk818083.B)({
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }), s = (0, o.Hu)({
    location: t,
    autoTrackExposure: false
  });
  return a.useExperiment({
    location: t
  }, {
    disable: r || s,
    autoTrackExposure: n
  })
}