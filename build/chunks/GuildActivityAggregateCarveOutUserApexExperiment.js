/** Chunk was on web.js **/
/** chunk id: 362352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yd: () => d,
  o0: () => u
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk128064 = require("./128064.js");
let o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_default_activity_status",
    label: "Guild activity status defaults",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable new defaults",
      config: {
        enabled: true
      }
    }]
  }),
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_default_activity_status_new_users",
    label: "Guild activity status defaults",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable new defaults",
      config: {
        enabled: true
      }
    }]
  }),
  l = (0, Chunk427164.le)({
    name: "2025-11-guild-activity-aggregate-carve-out",
    kind: "user",
    defaultConfig: {
      aggregateDefaultEnabled: true
    },
    variations: {
      0: {
        aggregateDefaultEnabled: true
      },
      1: {
        aggregateDefaultEnabled: false
      }
    }
  }),
  c = e => l.getConfig({
    location: e
  }).aggregateDefaultEnabled && (0, a.c_)("DefaultGuildActivityExperiment"),
  u = e => o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || c(e),
  d = e => {
    let t = o.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).enabled,
      n = s.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).enabled,
      r = l.useConfig({
        location: e
      }).aggregateDefaultEnabled,
      i = (0, a.pY)("DefaultGuildActivityExperiment");
    return t || n || r && i
  }