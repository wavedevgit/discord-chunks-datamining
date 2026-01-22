/** Chunk was on 21738 **/
/** chunk id: 409384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-06_google_play_price_change_notice_ks",
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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