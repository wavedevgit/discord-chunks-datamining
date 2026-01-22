/** Chunk was on web.js **/
/** chunk id: 37770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => l,
  I: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js"),
  Chunk128319 = require("./128319.js");
let o = (0, Chunk250105.Ay)({
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
  } = s.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}

function c(e) {
  let {
    location: t
  } = e;
  return (0, r.bG)([a.A], () => l({
    location: t
  }))
}