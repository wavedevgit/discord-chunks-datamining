/** Chunk was on web.js **/
/** chunk id: 362352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yd: () => l,
  o0: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk128064 = require("./128064.js");
let a = (0, Chunk818083.B)({
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
  o = (0, Chunk818083.B)({
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
  s = e => a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || (0, i.c_)("DefaultGuildActivityExperiment"),
  l = e => {
    let t = a.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).enabled,
      n = o.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).enabled,
      r = (0, i.pY)("DefaultGuildActivityExperiment");
    return t || n || r
  }