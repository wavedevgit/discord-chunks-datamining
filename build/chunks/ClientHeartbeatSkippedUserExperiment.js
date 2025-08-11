/** Chunk was on web.js **/
/** chunk id: 733879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-06_client_heartbeat_skipped",
  label: "Client Heartbeat Skipped Tracking",
  defaultConfig: {
    logHeartbeatSkipped: false
  },
  treatments: [{
    id: 1,
    label: "Logging enabled",
    config: {
      logHeartbeatSkipped: true
    }
  }]
});

function i() {
  return r.getCurrentConfig({
    location: "shouldLogClientHeartbeatSkipped"
  }).logHeartbeatSkipped
}