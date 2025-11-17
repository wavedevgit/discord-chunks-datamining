/** Chunk was on web.js **/
/** chunk id: 240458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-10_word_frequency_store_rollout",
  label: "Word Frequency Store",
  defaultConfig: {
    enabled: false,
    resetDataIfUnused: false
  },
  treatments: [{
    id: 1,
    label: "Enable Word Frequency Store",
    config: {
      enabled: true,
      resetDataIfUnused: false
    }
  }, {
    id: 2,
    label: "Reset data if unused",
    config: {
      enabled: false,
      resetDataIfUnused: true
    }
  }]
})