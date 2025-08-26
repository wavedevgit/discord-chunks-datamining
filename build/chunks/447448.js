/** Chunk was on web.js **/
/** chunk id: 447448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s,
  k: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk438379 = require("./438379.js");
let o = (0, Chunk427164.le)({
  name: "2025-07-user-profile-game-widgets",
  kind: "user",
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
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.J)({
    location: t,
    autoTrackExposure: n
  }), a = o.useConfig({
    location: t
  }).enabled;
  return !r && a
}

function s(e) {
  let {
    isInHoldout: t
  } = i.m.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return !t && o.getConfig({
    location: e
  }).enabled
}