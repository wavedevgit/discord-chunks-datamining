/** Chunk was on web.js **/
/** chunk id: 805877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a
});
var Chunk722733 = require("./722733.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk722733.Z)({
  kind: "user",
  name: "2025-10-low-latency-rate-control",
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
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}