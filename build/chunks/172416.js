/** Chunk was on web.js **/
/** chunk id: 172416, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o,
  h: () => s
});
var Chunk427164 = require("./427164.js"),
  Chunk438379 = require("./438379.js");
let a = (0, Chunk427164.le)({
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

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.J)({
    location: t,
    autoTrackExposure: n
  }), o = a.useConfig({
    location: t
  }).enabled;
  return !r && o
}

function s(e) {
  let {
    isInHoldout: t
  } = i.m.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }), n = a.getConfig({
    location: e
  }).enabled;
  return !t && n
}