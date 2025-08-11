/** Chunk was on web.js **/
/** chunk id: 475580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_discount_expiring_notice",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  label: "Discount Expiring Notice",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
})