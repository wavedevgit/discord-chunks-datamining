/** Chunk was on web.js **/
/** chunk id: 658046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
var Chunk250105 = require("./250105.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk250105.Ay)({
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

function s(e) {
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