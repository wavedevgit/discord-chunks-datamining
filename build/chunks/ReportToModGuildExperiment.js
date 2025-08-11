/** Chunk was on 1272 **/
/** chunk id: 592546, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-04_report_to_mod",
  label: "Report to moderator",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "report to moderator triggering",
    config: {
      enabled: true
    }
  }]
})