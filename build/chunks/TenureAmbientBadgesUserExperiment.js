/** Chunk was on web.js **/
/** chunk id: 36927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2025-05_tenure_ambient_badges",
  kind: "user",
  label: "Tenure Ambient Badges",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables new ambient badges for the Nitro tenure badge tooltips.",
    config: {
      enabled: true
    }
  }]
})