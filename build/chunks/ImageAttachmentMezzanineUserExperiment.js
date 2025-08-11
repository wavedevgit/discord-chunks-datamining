/** Chunk was on web.js **/
/** chunk id: 893601, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk480218 = require("./480218.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_image_attachment_mezzanine",
  label: "Convert attachment images to WebP format for size optimization",
  defaultConfig: {
    enabled: false,
    minFileSizeBytes: 204800,
    minSizeReductionPercent: .1
  },
  treatments: [{
    id: 1,
    label: "Control - No WebP conversion",
    config: {
      enabled: false,
      minFileSizeBytes: 204800,
      minSizeReductionPercent: .1
    }
  }, {
    id: 2,
    label: "WebP conversion enabled",
    config: {
      enabled: true,
      minFileSizeBytes: 204800,
      minSizeReductionPercent: .1
    }
  }, {
    id: 3,
    label: "WebP conversion enabled - Lower threshold",
    config: {
      enabled: true,
      minFileSizeBytes: 102400,
      minSizeReductionPercent: .1
    }
  }]
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
  return o.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}