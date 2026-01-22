/** Chunk was on web.js **/
/** chunk id: 765239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-06_native_intents",
  label: "Native Intents",
  defaultConfig: {
    searchEnabled: false,
    clearEnabled: false,
    activityEnabled: false
  },
  treatments: [{
    id: 1,
    label: "All enabled",
    config: {
      searchEnabled: true,
      clearEnabled: true,
      activityEnabled: true
    }
  }, {
    id: 2,
    label: "Clear Only",
    config: {
      searchEnabled: false,
      clearEnabled: true,
      activityEnabled: false
    }
  }, {
    id: 3,
    label: "Activities Only",
    config: {
      searchEnabled: false,
      clearEnabled: false,
      activityEnabled: true
    }
  }, {
    id: 4,
    label: "Activities and Clear",
    config: {
      searchEnabled: false,
      clearEnabled: true,
      activityEnabled: true
    }
  }]
})