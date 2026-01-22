/** Chunk was on web.js **/
/** chunk id: 796272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  getForceSdrEmojisStickersConfig: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk332628 = require("./332628.js");
let a = (0, Chunk945810.mj)({
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

function s(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.i.getCurrentConfig({
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