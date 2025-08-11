/** Chunk was on web.js **/
/** chunk id: 75459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D_: () => h,
  cU: () => g
});
var Chunk674746 = require("./674746.js"),
  Chunk242433 = require("./242433.js"),
  Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk941098 = require("./941098.js"),
  Chunk683951 = require("./683951.js");
require("./801236.js");
var Chunk335677 = require("./335677.js"),
  Chunk518914 = require("./518914.js");
let p = [{
    skuId: Chunk242433.d.SUMMER_2025_GIFTING_REWARD_SKU_ID,
    assetId: "a_f6d7905998db3f6f57671b4ea70fa272"
  }],
  h = 3,
  m = {
    gradient: ["rgba(218, 237, 137, 1)", "rgba(121, 199, 223, 1)", "rgba(177, 176, 234, 1)"]
  },
  g = {
    rewards: p,
    rewardAssetIdMap: (0, Chunk717401.YV)(p),
    dismissibleContentVersion: h,
    eligiblePlanIds: [Chunk474936.Xh.PREMIUM_YEAR_TIER_2, Chunk474936.Xh.PREMIUM_MONTH_TIER_2],
    planSelection: {
      heading: () => Chunk388032.intl.string(Chunk388032.t.ymgFZW),
      gradientConfig: m,
      getImageUrl: () => Chunk941098.Z,
      getBackgroundImageUrl: () => Chunk683951.Z,
      getCardImageUrl: () => Chunk518914.Z
    },
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require("./119452.js"),
        getGlowAnimationData: () => require("./431947.js")
      }
    },
    firstTimeNotice: {
      getImageUrl: (e, t) => t ? u.Z : f.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.PWaKU1),
      description: () => Chunk388032.intl.string(Chunk388032.t.EWn7kZ),
      cta: () => Chunk388032.intl.string(Chunk388032.t.RzWDqa),
      analyticsLocation: Chunk100527.Z.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk981631.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.Q0VMqK),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.VBnNJS),
      getImageUrl: () => "",
      gradientConfig: () => m
    },
    billingSettingsMarketingBanner: {
      getAnimatedImageUrl: () => Chunk335677.Z,
      getStaticImageUrl: () => Chunk941098.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.ydPofH),
      body: () => Chunk388032.intl.string(Chunk388032.t.iI74ho),
      gradientConfig: m,
      textColor: Chunk674746.Z.NEUTRAL_71
    },
    giftPurchaseConfirmation: {
      yearGiftText: Chunk388032.t.xFKdb2,
      monthGiftText: Chunk388032.t.GnL3Gh,
      collectRewardButtonText: () => Chunk388032.intl.string(Chunk388032.t.kMYVws),
      rewardCollectedText: () => Chunk388032.intl.string(Chunk388032.t.eZrmtr)
    }
  }