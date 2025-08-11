/** Chunk was on web.js **/
/** chunk id: 868616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2024-03_krisp_sentiment",
  label: "override krisp setting",
  defaultConfig: {
    shouldOverrideKrisp: false,
    overrideKrispSetting: false
  },
  treatments: [{
    id: 1,
    label: "Force enable krisp",
    config: {
      shouldOverrideKrisp: true,
      overrideKrispSetting: true
    }
  }, {
    id: 2,
    label: "Force disable krisp",
    config: {
      shouldOverrideKrisp: true,
      overrideKrispSetting: false
    }
  }]
})