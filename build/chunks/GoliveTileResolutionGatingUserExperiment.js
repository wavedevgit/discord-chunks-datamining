/** Chunk was on web.js **/
/** chunk id: 585360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => s,
  m: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_golive_tile_resolution_gating",
  label: "GoLive Tile Resolution Gating",
  defaultConfig: {
    enabled: false,
    adjustResolution: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Non-Nitro control",
    config: {
      enabled: false,
      adjustResolution: false
    }
  }, {
    id: 1,
    label: "Tile size based wants enabled only for non-nitro users",
    config: {
      enabled: true,
      adjustResolution: true
    }
  }, {
    id: 2,
    label: "Nitro control",
    config: {
      enabled: false,
      adjustResolution: false
    }
  }, {
    id: 3,
    label: "Tile size based wants enabled only for Nitro subscribers",
    config: {
      enabled: true,
      adjustResolution: true
    }
  }, {
    id: 4,
    label: "Tile size based bitrate adjustments for non-nitro users",
    config: {
      enabled: true,
      adjustResolution: false
    }
  }, {
    id: 5,
    label: "Tile size based bitrate adjustments for Nitro users",
    config: {
      enabled: true,
      adjustResolution: false
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}