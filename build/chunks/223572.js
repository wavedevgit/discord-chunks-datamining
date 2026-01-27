/** Chunk was on web.js **/
/** chunk id: 223572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk250105 = require("./250105.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk250105.Ay)({
  kind: "user",
  name: "2025-10-vad-before-processing",
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
  } = i.p.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}