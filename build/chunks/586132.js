/** Chunk was on web.js **/
/** chunk id: 586132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let a = (0, Chunk427164.le)({
  kind: "user",
  name: "2025_10_force_sdr_emojis_stickers",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
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
  } = i._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? {
    enabled: false
  } : a.getConfig({
    location: t
  })
}