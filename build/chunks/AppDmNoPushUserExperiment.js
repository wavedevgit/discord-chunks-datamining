/** Chunk was on web.js **/
/** chunk id: 537569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-03_app_dm_no_push",
  label: "Activity DM No Push",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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