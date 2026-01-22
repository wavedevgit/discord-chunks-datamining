/** Chunk was on web.js **/
/** chunk id: 661011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk332628 = require("./332628.js");
let a = (0, Chunk945810.mj)({
  name: "2025-09-image-attachment-mezzanine-v2",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true,
      maxFileSizeBytes: 524288
    },
    2: {
      enabled: true,
      maxFileSizeBytes: 262144
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