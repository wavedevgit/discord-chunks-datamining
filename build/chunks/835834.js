/** Chunk was on web.js **/
/** chunk id: 835834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-activity-status-disable-verb",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true
    }
  }
});

function i(e) {
  return r.getConfig({
    location: e
  }).enabled
}