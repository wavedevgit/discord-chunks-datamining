/** Chunk was on web.js **/
/** chunk id: 177732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk818083.B)({
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
  } = i.L.getCurrentConfig({
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