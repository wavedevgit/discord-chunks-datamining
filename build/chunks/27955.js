/** Chunk was on web.js **/
/** chunk id: 27955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o
});
var Chunk722733 = require("./722733.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk722733.ZP)({
  kind: "user",
  name: "2025-11-global-frame-pool-lock",
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
  return r || n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}