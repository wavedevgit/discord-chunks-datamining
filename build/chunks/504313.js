/** Chunk was on web.js **/
/** chunk id: 504313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => a
}), require("./442837.js");
var Chunk722733 = require("./722733.js");
require("./633289.js");
var Chunk751823 = require("./751823.js");
let o = (0, Chunk722733.Z)({
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

function a(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}