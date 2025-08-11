/** Chunk was on 1272 **/
/** chunk id: 362738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_att_exposure_aa",
  label: "ATT exposure experiment",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: true
  },
  treatments: [{
    id: 1,
    label: "T1",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "T2",
    config: {
      enabled: true
    }
  }]
})