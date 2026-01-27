/** Chunk was on web.js **/
/** chunk id: 461285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk182828 = require("./182828.js");
let a = (0, Chunk600975.C)({
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

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.o.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return a.getCurrentConfig({
    location: e
  }, {
    disable: n,
    autoTrackExposure: t
  })
}