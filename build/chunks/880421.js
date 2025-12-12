/** Chunk was on web.js **/
/** chunk id: 880421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk438379 = require("./438379.js");
let o = (0, Chunk427164.le)({
  name: "2025-08-user-profile-application-widgets",
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