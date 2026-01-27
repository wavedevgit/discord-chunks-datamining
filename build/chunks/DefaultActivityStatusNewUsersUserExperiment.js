/** Chunk was on web.js **/
/** chunk id: 809976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  oK: () => l,
  ty: () => c
});
var Chunk923457 = require("./923457.js"),
  Chunk600975 = require("./600975.js"),
  Chunk207560 = require("./207560.js");
let o = (0, Chunk600975.C)({
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
  s = (0, Chunk600975.C)({
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
  l = e => o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled || (0, a.To)(r.p.GUILD_ACTIVITY_STATUS),
  c = e => {
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
      i = (0, a.yv)(r.p.GUILD_ACTIVITY_STATUS);
    return t || n || i
  }