/** Chunk was on 45620 **/
/** chunk id: 345778, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_mobile_shop_featured_page",
  label: "Mobile Shop Featured Page",
  defaultConfig: {
    showMobileShopFeaturedPage: false
  },
  commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
  treatments: [{
    id: 1,
    label: "Use mobile shop featured page",
    config: {
      showMobileShopFeaturedPage: true
    }
  }]
})