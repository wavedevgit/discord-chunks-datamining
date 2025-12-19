/** Chunk was on web.js **/
/** chunk id: 347101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk427164.le)({
  name: "2025-12-mobile-golive-tile-resolution",
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
  return n ? a.definition.defaultConfig : a.getConfig({
    location: e
  })
}