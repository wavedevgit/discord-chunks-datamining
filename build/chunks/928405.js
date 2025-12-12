/** Chunk was on web.js **/
/** chunk id: 928405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let o = (0, Chunk427164.le)({
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