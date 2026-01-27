/** Chunk was on web.js **/
/** chunk id: 124838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o
}), require("./311907.js");
var Chunk250105 = require("./250105.js");
require("./217222.js");
var Chunk128319 = require("./128319.js");
let a = (0, Chunk250105.Ay)({
  kind: "user",
  name: "2025-12-proportional-vad-indicator",
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
    location: t
  } = e, {
    isInHoldout: n
  } = i.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}