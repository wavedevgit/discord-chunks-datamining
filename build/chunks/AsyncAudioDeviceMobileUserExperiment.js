/** Chunk was on web.js **/
/** chunk id: 788601, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-07_async_audio_device_mobile",
  label: "Mobile Asynchronous Audio Device Manager Controls",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Mobile Asynchronous Audio Device Manager Controls",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}