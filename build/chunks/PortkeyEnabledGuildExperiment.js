/** Chunk was on web.js **/
/** chunk id: 488803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C$: () => a,
  TS: () => i,
  x1: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "guild",
  id: "2025-08_portkey_enabled",
  label: "GameServer Enabled",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable GameServer",
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