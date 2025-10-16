/** Chunk was on web.js **/
/** chunk id: 960708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk427164.le)({
  name: "2025-10-async-camera-init",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.L.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n ? {
    enabled: false
  } : a.getConfig({
    location: e
  })
}