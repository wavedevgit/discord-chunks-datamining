/** Chunk was on web.js **/
/** chunk id: 559268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => r
});
let r = (0, require("./427164.js").le)({
  name: "2025-10-gif-providers-multi-treatment",
  kind: "user",
  defaultConfig: {
    provider: "tenor",
    fallbackProvider: "tenor",
    enableMetrics: true
  },
  variations: {
    0: {
      provider: "tenor",
      fallbackProvider: "tenor",
      enableMetrics: true
    },
    1: {
      provider: "giphy",
      fallbackProvider: "tenor",
      enableMetrics: true
    },
    2: {
      provider: "klipy",
      fallbackProvider: "tenor",
      enableMetrics: true
    }
  }
})