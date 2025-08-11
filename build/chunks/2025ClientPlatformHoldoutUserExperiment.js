/** Chunk was on web.js **/
/** chunk id: 846573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => r
});
let r = (0, require("./987170.js").Z)({
  kind: "user",
  id: "2025-02_2025_client_platform_holdout",
  label: "Client Platform Holdout - H1 2025",
  defaultConfig: {
    isInHoldout: false
  },
  treatments: [{
    id: 1,
    label: "Enables the holdout experiment",
    config: {
      isInHoldout: true
    }
  }]
})