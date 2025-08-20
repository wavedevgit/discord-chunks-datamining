/** Chunk was on 1272 **/
/** chunk id: 479661, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  id: "2025-08_custom_theme_share_send",
  kind: "user",
  label: "Custom Theme Share Send",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables sharing functionality for custom client themes",
    config: {
      enabled: true
    }
  }]
})