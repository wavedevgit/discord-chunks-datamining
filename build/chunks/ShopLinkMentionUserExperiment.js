/** Chunk was on web.js **/
/** chunk id: 914216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-12_shop_link_mention",
    label: "Collectibles Shop Link Mention Experiment",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Render shop link as mention",
      config: {
        enabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  o = e => a.getCurrentConfig({
    location: e
  }).enabled