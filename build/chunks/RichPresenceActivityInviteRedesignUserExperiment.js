/** Chunk was on 1272 **/
/** chunk id: 380249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-04_rich_presence_activity_invite_redesign",
  label: "Rich Presence Activity Invite Redesign Experiment",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Rich Presence Activity Invite Redesign",
    config: {
      enabled: true
    }
  }]
})