/** Chunk was on web.js **/
/** chunk id: 502450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk427164.le)({
  name: "2025-11-async-clips-source-deinit",
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

function a(e) {
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
  } : o.getConfig({
    location: e
  })
}