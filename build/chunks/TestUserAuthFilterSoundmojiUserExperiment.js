/** Chunk was on 1272 **/
/** chunk id: 970071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => l
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk987170.Z)({
  kind: "user",
  id: "2025-02_test_user_auth_filter_soundmoji",
  label: "Test User Auth Filter Soundmoji",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Variation with treatment enabled",
    config: {
      enabled: true
    }
  }]
})