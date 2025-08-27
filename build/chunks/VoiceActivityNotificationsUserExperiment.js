/** Chunk was on web.js **/
/** chunk id: 462354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Az: () => i,
  JN: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_voice_activity_notifications",
  label: "Voice Activity Notifications",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "60% Affinity",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "70% Affinity",
    config: {
      enabled: true
    }
  }, {
    id: 3,
    label: "60% Affinity, no channel rate limit",
    config: {
      enabled: true
    }
  }, {
    id: 4,
    label: "50% Affinity, no channel rate limit",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  })
}

function a(e) {
  return r.getCurrentConfig({
    location: e
  }).enabled
}