/** Chunk was on 1272 **/
/** chunk id: 507985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_google_play_price_change_notice_ks",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  label: "Google Play Price Change Notice Killswitch",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Force disable Google Play price change notice DC",
    config: {
      enabled: true
    }
  }]
})