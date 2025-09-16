/** Chunk was on web.js **/
/** chunk id: 187232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => N
});
var Chunk242433 = require("./242433.js"),
  Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796909 = require("./796909.js"),
  Chunk893410 = require("./893410.js"),
  Chunk878339 = require("./878339.js"),
  Chunk330529 = require("./330529.js"),
  Chunk552365 = require("./552365.js"),
  Chunk492336 = require("./492336.js"),
  Chunk457686 = require("./457686.js"),
  Chunk516773 = require("./516773.js"),
  Chunk198026 = require("./198026.js"),
  Chunk543980 = require("./543980.js");
let b = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID,
    assetId: "a_fe4a5080455bc20030589d3b930ebe7b",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuiv7"]),
      name: Chunk388032.intl.string(Chunk388032.t["9PzTtL"])
    })
  },
  y = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID,
    assetId: "a_ade36581b93e50a565541e1964d7eb6a",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlZ"]),
      name: Chunk388032.intl.string(Chunk388032.t["9PzTtL"])
    })
  },
  O = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID,
    assetId: "a_9fb28bf1ed0bed681898f57df3acec5b",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuiv7"]),
      name: Chunk388032.intl.string(Chunk388032.t.sBk8mZ)
    })
  },
  v = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID,
    assetId: "a_f43fa3efdeda7f7d50fed5f3e5c5cef5",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlZ"]),
      name: Chunk388032.intl.string(Chunk388032.t.sBk8mZ)
    })
  },
  I = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID,
    assetId: "a_0103146312bbffdb9a58ce4da3d901d1",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuiv7"]),
      name: Chunk388032.intl.string(Chunk388032.t.RbkXxc)
    })
  },
  T = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID,
    assetId: "a_652117a3882f5ae4cc30e56d7ac013a7",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlZ"]),
      name: Chunk388032.intl.string(Chunk388032.t.RbkXxc)
    })
  },
  S = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID,
    assetId: "a_8655de5a2c086276231144432fefb8f0",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuiv7"]),
      name: Chunk388032.intl.string(Chunk388032.t.FW3Qp6)
    })
  },
  A = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID,
    assetId: "a_91bdfba540bf5f305f906e6588704ac6",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0t, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlZ"]),
      name: Chunk388032.intl.string(Chunk388032.t.FW3Qp6)
    })
  },
  C = {
    gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"]
  },
  N = {
    variants: [{
      name: () => Chunk388032.intl.string(Chunk388032.t["9PzTtL"]),
      variants: [b, y]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t.sBk8mZ),
      variants: [O, v]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t.RbkXxc),
      variants: [I, T]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t.FW3Qp6),
      variants: [S, A]
    }],
    rewardAssetIdMap: (0, Chunk717401.YV)([b, y, O, v, I, T, S, A]),
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require.e("19511").then(require.bind(require, 322980)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        }),
        getGlowAnimationData: () => require.e("37079").then(require.bind(require, 474)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      }
    },
    segmentedControlAnimations: {
      trick: {
        getAnimationData: () => require.e("87983").then(require.bind(require, 913493)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      },
      treat: {
        getAnimationData: () => require.e("33472").then(require.bind(require, 795420)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      }
    },
    dismissibleContentVersion: 4,
    firstTimeNotice: {
      getImageUrl: (e, t) => t ? _.Z : f.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.UPFiIi),
      description: () => Chunk388032.intl.string(Chunk388032.t["F/5kFB"]),
      cta: () => Chunk388032.intl.string(Chunk388032.t.RzWDqa),
      analyticsLocation: Chunk100527.Z.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk981631.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    eligiblePlanIds: [Chunk474936.Xh.PREMIUM_YEAR_TIER_2, Chunk474936.Xh.PREMIUM_MONTH_TIER_2],
    planSelection: {
      heading: () => Chunk388032.intl.string(Chunk388032.t.ruVnPj),
      subheading: () => Chunk388032.intl.string(Chunk388032.t.q4BJSE),
      mobileSubheading: e => l.intl.formatToPlainString(l.t.eDBuFx, {
        rewardCount: e
      }),
      gradientConfig: C,
      getImageUrl: (e, t) => t ? m.Z : h.Z,
      getBannerImageUrl: () => Chunk543980.Z,
      getBackgroundImageUrl: () => Chunk796909.Z
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.mMgymZ),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.dAqTcH),
      getImageUrl: () => Chunk516773.Z,
      gradientConfig: () => C,
      getBackgroundImageUrl: () => Chunk492336.Z
    },
    billingSettingsMarketingBanner: {
      getImageUrl: e => e ? d.Z : u.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.CGgAyM),
      body: () => Chunk388032.intl.string(Chunk388032.t["9rInzc"]),
      getBackgroundImageUrl: () => Chunk198026.Z
    },
    giftPurchaseConfirmation: {
      yearGiftText: Chunk388032.t["rSS+oq"],
      monthGiftText: Chunk388032.t.gI6Yvr,
      collectRewardButtonText: () => Chunk388032.intl.string(Chunk388032.t.kMYVws),
      rewardCollectedText: () => Chunk388032.intl.string(Chunk388032.t.eZrmtr)
    }
  }