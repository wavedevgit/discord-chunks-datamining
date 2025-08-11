/** Chunk was on 75708 **/
/** chunk id: 462354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Az: () => r,
  JN: () => s
});
let i = (0, require("./818083.js").B)({
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

function r(e) {
  return i.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  })
}

function s(e) {
  return i.getCurrentConfig({
    location: e
  }).enabled
}