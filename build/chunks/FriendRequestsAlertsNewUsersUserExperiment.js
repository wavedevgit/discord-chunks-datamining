/** Chunk was on web.js **/
/** chunk id: 497060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k6: () => s,
  kH: () => c,
  pB: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk128064 = require("./128064.js");
let o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_friend_requests_alerts",
    label: "Friend Request Setting Defaults",
    defaultConfig: {
      enabled: false,
      bucket: 0
    },
    treatments: [{
      id: 1,
      label: "warning",
      config: {
        enabled: true,
        bucket: 1
      }
    }, {
      id: 2,
      label: "defaults",
      config: {
        enabled: true,
        bucket: 2
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_friend_requests_alerts_new_users",
    label: "Friend Request Setting Defaults",
    defaultConfig: {
      enabled: false,
      bucket: 0
    },
    treatments: [{
      id: 1,
      label: "warning",
      config: {
        enabled: true,
        bucket: 1
      }
    }, {
      id: 2,
      label: "defaults",
      config: {
        enabled: true,
        bucket: 2
      }
    }]
  }),
  s = e => 2 === o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).bucket || 2 === a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).bucket,
  l = e => 1 === o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).bucket || 1 === a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).bucket || (0, i.c_)(e),
  c = e => {
    let t = o.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).bucket,
      n = a.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }).bucket;
    return 2 === t || 2 === n
  }