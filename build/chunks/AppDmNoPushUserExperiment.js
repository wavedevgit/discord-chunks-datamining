/** Chunk was on web.js **/
/** chunk id: 162685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-03_app_dm_no_push",
  label: "Activity DM No Push",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Disables push notifications for activities, enables opt-in switch",
    config: {
      enabled: true,
      defaultOnMobile: false
    }
  }, {
    id: 2,
    label: "Same as treatment 1, but defaults to on on mobile",
    config: {
      enabled: true,
      defaultOnMobile: true
    }
  }]
})