/** Chunk was on web.js **/
/** chunk id: 815644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_audio_bitrate_adaptation",
  label: "Audio Bitrate Adaptation",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable audio bitrate adaptation",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.Y.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return o.getCurrentConfig({
    location: e
  }, {
    disable: n,
    autoTrackExposure: t
  })
}