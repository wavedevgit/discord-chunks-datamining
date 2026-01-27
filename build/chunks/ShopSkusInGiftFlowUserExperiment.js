/** Chunk was on web.js **/
/** chunk id: 547065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a,
  P: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js"),
  a = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.POPULAR = 1] = "POPULAR", e[e.RECENT = 2] = "RECENT", e
  }({});
let o = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-10_shop_skus_in_gift_flow",
  label: "Gift Collectibles in DM",
  defaultConfig: {
    enabled: false,
    showBothNitroSkusInCategorySelect: false,
    giftRecommendationAlgorithm: 0
  },
  commonTriggerPoint: Chunk688151.$G.DM_GDM_LIST_RENDER,
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