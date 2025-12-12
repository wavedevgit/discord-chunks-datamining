/** Chunk was on web.js **/
/** chunk id: 755458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BU: () => o,
  u7: () => r,
  v$: () => i
});
let r = (0, require("./818083.js").B)({
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

function o(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}