/** Chunk was on web.js **/
/** chunk id: 99066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lj: () => f,
  VS: () => c,
  ds: () => o,
  sE: () => u,
  t4: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk335934 = require("./335934.js"),
  Chunk688151 = require("./688151.js");
let s = (0, Chunk600975.C)({
    kind: "user",
    id: "2024-03_content_inventory_memberlist_and_ranker",
    label: "Enables the memberlist content feed",
    defaultConfig: {
      enabled: true,
      impressionCappingEnabled: true
    },
    treatments: [{
      id: false,
      label: "Not in experiment",
      config: {
        enabled: false
      }
    }, {
      id: 0,
      label: "Holdout",
      config: {
        enabled: false
      }
    }]
  }),
  o = (0, Chunk600975.C)({
    kind: "user",
    id: "2025-04_hotwheels_holdout_the_sequel",
    label: "Tracking a holdout hashed to member list experiment for data readouts",
    commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
    defaultConfig: {},
    treatments: [{
      id: 0,
      label: "Holdout",
      config: {}
    }, {
      id: 1,
      label: "Shadow Treatment",
      config: {}
    }]
  }),
  l = (0, Chunk600975.C)({
    kind: "user",
    id: "2025-09_hotwheels_nvidia_boost",
    label: "Next iteration of the activity feed ranking model.",
    commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
    defaultConfig: {},
    treatments: [{
      id: 16,
      label: "ML model V3 - Nvidia small boost",
      config: {}
    }, {
      id: 17,
      label: "ML model V3 - Nvidia big boost",
      config: {}
    }]
  });

function c(e) {
  let {
    enabled: t
  } = s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  }), n = (0, i.HF)(e, false);
  return t || n
}

function u(e) {
  let {
    enabled: t,
    impressionCappingEnabled: n
  } = s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t && true === n
}
let d = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-08_content_inventory_analytics_sampling",
  label: "Content Inventory Analytics Sampling",
  defaultConfig: {
    trackingEnabled: true
  },
  treatments: [{
    id: 1,
    label: "Tracking disabled",
    config: {
      trackingEnabled: false
    }
  }]
});

function f(e) {
  return d.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  })
}