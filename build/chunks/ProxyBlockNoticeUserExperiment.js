/** Chunk was on web.js **/
/** chunk id: 426123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2023-09_proxy_block_notice",
  label: "Proxy Block Experiment",
  defaultConfig: {
    eligibleForNotice: false
  },
  treatments: [{
    id: 1,
    label: "Show nag bar when proxy blocks an API request",
    config: {
      eligibleForNotice: true
    }
  }]
})