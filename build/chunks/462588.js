/** Chunk was on 9536 **/
/** chunk id: 462588, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => i
});
let r = (0, require("./722733.js").Z)({
  name: "2025-12-hide-guild-boost-status-tab",
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