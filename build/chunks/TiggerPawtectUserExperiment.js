/** Chunk was on web.js **/
/** chunk id: 974814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H1: () => a,
  s8: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk128064 = require("./128064.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-02_tigger_pawtect",
  label: "Tigger pawtect",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Tigger pawtect",
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
    autoTrackExposure: true
  }).enabled || (0, i.c_)(t)
}

function s(e) {
  let {
    location: t
  } = e, n = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  }), r = (0, i.pY)(t);
  return n.enabled || r
}