/** Chunk was on web.js **/
/** chunk id: 355552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-01_audio_nack",
  label: "Audio NACK",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable NACK for audio",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.Y.getCurrentConfig({
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