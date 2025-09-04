/** Chunk was on web.js **/
/** chunk id: 634952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => l,
  Lz: () => o,
  ZO: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk818083 = require("./818083.js"),
  Chunk594174 = require("./594174.js");
let o = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-08_portkey_enabled",
  label: "Portkey Enabled",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Portkey",
    config: {
      enabled: true
    }
  }]
});

function s(e, t) {
  var n, r;
  let i = null != (r = null == (n = a.default.getCurrentUser()) ? true : n.isStaff()) && r;
  return o.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled && i
}

function l(e, t) {
  let n = (0, r.e7)([a.default], () => {
    var e, t;
    return null != (t = null == (e = a.default.getCurrentUser()) ? true : e.isStaff()) && t
  });
  return o.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled && n
}