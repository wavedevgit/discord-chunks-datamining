/** Chunk was on web.js **/
/** chunk id: 770555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
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