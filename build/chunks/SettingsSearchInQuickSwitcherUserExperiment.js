/** Chunk was on 97887 **/
/** chunk id: 818039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let i = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-02_settings_search_in_quick_switcher",
  label: "Settings in Quick Switcher",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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