/** Chunk was on web.js **/
/** chunk id: 187232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => c
}), require("./388685.js");
var Chunk100527 = require("./100527.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk700366 = require("./700366.js");
let l = {
    gradient: ["rgb(2, 25, 47)", "rgb(9, 95, 51)", "rgb(21, 209, 46)"]
  },
  c = {
    rewards: [{
      skuId: "1287835633615765524",
      assetId: "a_41445f736db3525135b6b9e1122f2254"
    }, {
      skuId: "1287835633645125653",
      assetId: "a_a78819f4d41900aa7698a1bafaf6af41"
    }, {
      skuId: "1287835633674620949",
      assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80"
    }, {
      skuId: "1287835633703845888",
      assetId: "a_a8c5af1848e53cc221d149442c03828f"
    }],
    rewardAssetIdMap: new Map,
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require("./969666.js"),
        getGlowAnimationData: () => require("./90801.js")
      }
    },
    dismissibleContentVersion: 4,
    firstTimeNotice: {
      getImageUrl: () => Chunk700366.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.PWaKU1),
      description: () => Chunk388032.intl.string(Chunk388032.t.EWn7kZ),
      cta: () => Chunk388032.intl.string(Chunk388032.t.RzWDqa),
      analyticsLocation: Chunk100527.Z.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk981631.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    planSelection: {
      heading: () => "Free Reward for YOU!",
      subheading: () => "Choose one you love!",
      gradientConfig: l,
      getImageUrl: () => Chunk700366.Z,
      getBackgroundImageUrl: () => ""
    },
    eligiblePlanIds: [Chunk474936.Xh.PREMIUM_YEAR_TIER_2, Chunk474936.Xh.PREMIUM_MONTH_TIER_2],
    planSelectionBanner: {
      desktopBannerText: () => "You will receive a free deco with this purchase. Choose in the next step.",
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.VBnNJS),
      getImageUrl: () => Chunk700366.Z,
      gradientConfig: () => l
    }
  }