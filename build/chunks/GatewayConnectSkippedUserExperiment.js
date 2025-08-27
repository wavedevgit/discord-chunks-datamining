/** Chunk was on web.js **/
/** chunk id: 249308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a,
  n: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-06_gateway_connect_skipped",
  label: "Gateway Connect Skipped Logging",
  defaultConfig: {
    logSkipped: false,
    logPostSkipped: false
  },
  treatments: [{
    id: 1,
    label: "Fully Enabled",
    config: {
      logSkipped: true,
      logPostSkipped: true
    }
  }, {
    id: 2,
    label: "Don't log post-skipped",
    config: {
      logSkipped: true,
      logPostSkipped: false
    }
  }]
});

function i() {
  return r.getCurrentConfig({
    location: "shouldLogConnectSkipped"
  }).logSkipped
}

function a() {
  return r.getCurrentConfig({
    location: "shouldLogPostConnectSkipped"
  }).logPostSkipped
}