/** Chunk was on web.js **/
/** chunk id: 375965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => i
});
let r = (0, require("./250105.js").Ay)({
  name: "2025-12-boosting-marketing-page-refresh",
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
  return r.useConfig({
    location: e
  }).enabled
}