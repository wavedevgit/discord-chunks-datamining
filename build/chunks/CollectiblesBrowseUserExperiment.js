/** Chunk was on 45620 **/
/** chunk id: 870289, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FF: () => s,
  KS: () => i,
  eN: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_collectibles_browse",
    label: "Collectibles Browse Experiment",
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
    defaultConfig: {
      filterEnabled: false,
      searchEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable collectibles browse",
      config: {
        filterEnabled: true,
        searchEnabled: true
      }
    }, {
      id: 2,
      label: "Enable collectibles browse with only filter",
      config: {
        filterEnabled: true,
        searchEnabled: false
      }
    }]
  }),
  s = e => i.useExperiment({
    location: e
  }).filterEnabled,
  o = e => i.useExperiment({
    location: e
  }).searchEnabled