/** Chunk was on web.js **/
/** chunk id: 369487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => r
});
let r = (0, require("./600975.js").C)({
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