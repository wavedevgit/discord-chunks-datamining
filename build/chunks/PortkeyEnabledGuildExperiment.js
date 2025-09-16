/** Chunk was on web.js **/
/** chunk id: 634952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => a,
  Lz: () => r,
  ZO: () => i
});
let r = (0, require("./818083.js").B)({
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

function i(e, t) {
  return r.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function a(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}