/** Chunk was on 82477 **/
/** chunk id: 558631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-02_settings_search_in_quick_switcher",
  label: "Settings in Quick Switcher",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Enable Settings search in Quick Switcher",
    config: {
      enabled: true
    }
  }]
})