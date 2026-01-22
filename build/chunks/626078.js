/** Chunk was on web.js **/
/** chunk id: 626078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk945810.mj)({
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

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = i.p.getCurrentConfig({
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