/** Chunk was on web.js **/
/** chunk id: 934341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk945810.mj)({
  name: "2025-08-browser-hevc",
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