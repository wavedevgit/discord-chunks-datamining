/** Chunk was on 21738 **/
/** chunk id: 89465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-05_reverse_trial_promotion",
  label: "Reverse Trials",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Users receives reverse trial + 1 week follow-up offer",
    config: {
      enabled: true
    }
  }]
})