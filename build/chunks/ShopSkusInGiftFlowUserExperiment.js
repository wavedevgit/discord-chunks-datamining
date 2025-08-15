/** Chunk was on web.js **/
/** chunk id: 109213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o,
  u: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js"),
  a = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.POPULAR = 1] = "POPULAR", e[e.RECENT = 2] = "RECENT", e
  }({});
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-10_shop_skus_in_gift_flow",
  label: "Gift Collectibles in DM",
  defaultConfig: {
    enabled: false,
    showBothNitroSkusInCategorySelect: false,
    giftRecommendationAlgorithm: 0
  },
  commonTriggerPoint: Chunk987338.$P.DM_GDM_LIST_RENDER,
  treatments: [{
    id: 1,
    label: "Gift Collectibles in DM, with existing Nitro flow, showing popular items",
    config: {
      enabled: true,
      showBothNitroSkusInCategorySelect: false,
      giftRecommendationAlgorithm: 1
    }
  }, {
    id: 2,
    label: "Gift Collectibles in DM, with existing Nitro flow, showing recent items",
    config: {
      enabled: true,
      showBothNitroSkusInCategorySelect: false,
      giftRecommendationAlgorithm: 2
    }
  }, {
    id: 3,
    label: "Gift Collectibles in DM, select Nitro SKU from category, showing popular items",
    config: {
      enabled: true,
      showBothNitroSkusInCategorySelect: true,
      giftRecommendationAlgorithm: 1
    }
  }, {
    id: 4,
    label: "Gift Collectibles in DM, select Nitro SKU from category, showing recent items",
    config: {
      enabled: true,
      showBothNitroSkusInCategorySelect: true,
      giftRecommendationAlgorithm: 2
    }
  }]
})