/** Chunk was on web.js **/
/** chunk id: 586132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getForceSdrEmojisStickersConfig: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let o = (0, Chunk427164.le)({
  kind: "user",
  name: "2025-10-force-sdr-emojis-stickers",
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

function a(e) {
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
  } : o.getConfig({
    location: t
  })
}