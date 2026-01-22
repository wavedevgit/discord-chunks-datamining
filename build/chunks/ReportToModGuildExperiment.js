/** Chunk was on 21738 **/
/** chunk id: 500094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk600975.C)({
  kind: "guild",
  id: "2025-04_report_to_mod",
  label: "Report to moderator",
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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