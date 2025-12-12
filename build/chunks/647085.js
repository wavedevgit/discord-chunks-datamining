/** Chunk was on web.js **/
/** chunk id: 647085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => c,
  q: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js"),
  Chunk751823 = require("./751823.js");
let s = (0, Chunk722733.Z)({
  name: "2025-10-windows-mute-detection",
  kind: "user",
  defaultConfig: {
    windowsMuteAndZeroVolumeDetectionEnabled: false
  },
  variations: {
    1: {
      windowsMuteAndZeroVolumeDetectionEnabled: true
    }
  }
});

function l(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = o.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? s.definition.defaultConfig : s.getConfig({
    location: t
  })
}

function c(e) {
  let {
    location: t
  } = e;
  return (0, r.e7)([a.Z], () => l({
    location: t
  }))
}