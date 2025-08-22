/** Chunk was on 45620 **/
/** chunk id: 909688, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  j: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-01_mobile_shop_adaptive_back_button_color",
  label: "mobile shop adaptive back button color",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Based on banner dominate color",
    config: {
      enabled: true
    }
  }],
  commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
})