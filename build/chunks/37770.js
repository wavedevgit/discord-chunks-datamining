/** Chunk was on 93140 **/
/** chunk id: 37770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => s,
  I: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk250105.Ay)({
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

function s(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = o.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? a.definition.defaultConfig : a.getConfig({
    location: t
  })
}

function c(e) {
  let {
    location: t
  } = e;
  return (0, r.bG)([l.A], () => s({
    location: t
  }))
}