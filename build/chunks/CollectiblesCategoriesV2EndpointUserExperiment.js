/** Chunk was on web.js **/
/** chunk id: 526503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o,
  p: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_collectibles_categories_v2_endpoint",
    label: "Collectibles V2 Endpoint",
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    defaultConfig: {
      useV2Endpoint: false
    },
    treatments: [{
      id: 1,
      label: "Use V2 Endpoint",
      config: {
        useV2Endpoint: true
      }
    }]
  }),
  o = e => a.getCurrentConfig({
    location: e
  }).useV2Endpoint