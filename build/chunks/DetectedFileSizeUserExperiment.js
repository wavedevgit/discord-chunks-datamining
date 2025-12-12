/** Chunk was on web.js **/
/** chunk id: 171638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk480218 = require("./480218.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_detected_file_size",
  label: "Detected File Size",
  defaultConfig: {
    useDetectedFileSize: false
  },
  treatments: [{
    id: 1,
    label: "Control - Use File.size directly",
    config: {
      useDetectedFileSize: false
    }
  }, {
    id: 2,
    label: "Treatment - Use detected file size with fallback",
    config: {
      useDetectedFileSize: true
    }
  }]
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
  return a.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  })
}