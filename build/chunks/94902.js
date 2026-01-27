/** Chunk was on web.js **/
/** chunk id: 94902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o
});
var Chunk945810 = require("./945810.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk945810.mj)({
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
    } = i.p.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n ? a.definition.defaultConfig : a.getConfig({
    location: e
  })
}