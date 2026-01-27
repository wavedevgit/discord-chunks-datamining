/** Chunk was on web.js **/
/** chunk id: 547927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk332628 = require("./332628.js");
let a = (0, Chunk600975.C)({
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
  } = i.i.getCurrentConfig({
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