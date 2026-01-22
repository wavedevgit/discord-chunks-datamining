/** Chunk was on web.js **/
/** chunk id: 871431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
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