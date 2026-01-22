/** Chunk was on web.js **/
/** chunk id: 596334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  id: "2023-11_adyen_auth_without_capture",
  label: "Adyen auth without capture rollout",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
})