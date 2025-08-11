/** Chunk was on web.js **/
/** chunk id: 612002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-03_store_latest_message_data",
  label: "Store latest message data",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Use latest data from api/gateway",
    config: {
      enabled: true
    }
  }]
})