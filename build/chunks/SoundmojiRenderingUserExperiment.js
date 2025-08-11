/** Chunk was on web.js **/
/** chunk id: 722932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X0: () => s,
  uH: () => a,
  zv: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2024-11_soundmoji_rendering",
  label: "Render soundmojis",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e;
  return o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return o.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}