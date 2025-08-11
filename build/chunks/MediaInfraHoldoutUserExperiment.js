/** Chunk was on web.js **/
/** chunk id: 504876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => r
});
let r = (0, require("./987170.js").Z)({
  kind: "user",
  id: "2025-01_media_infra_holdout",
  label: "Media Infra Holdout - H1 2025",
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