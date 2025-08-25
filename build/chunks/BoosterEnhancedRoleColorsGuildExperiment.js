/** Chunk was on web.js **/
/** chunk id: 232062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tq: () => o,
  W: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2025-06_booster_enhanced_role_colors",
  label: "Booster Enhanced Role Colors",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "enabled",
    config: {
      enabled: true
    }
  }]
});

function i(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}

function o(e, t) {
  return r.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}