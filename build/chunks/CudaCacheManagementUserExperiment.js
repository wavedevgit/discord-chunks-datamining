/** Chunk was on web.js **/
/** chunk id: 148807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_cuda_cache_management",
  label: "CUDA cache management",
  defaultConfig: {
    prewarm: false,
    clear: false
  },
  treatments: [{
    id: 1,
    label: "Prewarm + Clear",
    config: {
      prewarm: true,
      clear: true
    }
  }, {
    id: 2,
    label: "Prewarm only",
    config: {
      prewarm: true,
      clear: false
    }
  }, {
    id: 3,
    label: "Clear only",
    config: {
      prewarm: false,
      clear: true
    }
  }]
})