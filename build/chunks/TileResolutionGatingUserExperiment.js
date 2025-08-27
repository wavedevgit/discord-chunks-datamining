/** Chunk was on web.js **/
/** chunk id: 621012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-10_tile_resolution_gating",
  label: "Tile Resolution Gating",
  defaultConfig: {
    enabledSingle: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Tile size based wants enabled only for 1:1 videos (rollout)",
    config: {
      enabledSingle: true
    }
  }, {
    id: 2,
    label: "Tile size based wants enabled only for 1:1 videos (new stats slice to compare against control)",
    config: {
      enabledSingle: true
    }
  }]
})