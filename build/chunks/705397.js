/** Chunk was on web.js **/
/** chunk id: 705397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => N
});
var Chunk242433 = require("./242433.js"),
  Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk885472 = require("./885472.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk154658 = require("./154658.js"),
  Chunk362290 = require("./362290.js"),
  Chunk873048 = require("./873048.js"),
  Chunk572472 = require("./572472.js"),
  Chunk235583 = require("./235583.js"),
  Chunk306225 = require("./306225.js"),
  Chunk28986 = require("./28986.js"),
  Chunk194950 = require("./194950.js"),
  Chunk103865 = require("./103865.js"),
  Chunk29653 = require("./29653.js");
let b = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID,
    assetId: "a_dec0db5e1395a9d7df152d6981443cd8",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuivx"]),
      name: Chunk388032.intl.string(Chunk388032.t["9PzTtM"])
    })
  },
  y = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID,
    assetId: "a_8636994a8d0b1c5c8353ebce125c2cef",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlY"]),
      name: Chunk388032.intl.string(Chunk388032.t["9PzTtM"])
    })
  },
  O = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID,
    assetId: "a_843b6925894c8fa530432ad197eb8dcd",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuivx"]),
      name: Chunk388032.intl.string(Chunk388032.t.sBk8mT)
    })
  },
  v = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID,
    assetId: "a_3835acaf56f5b8cdfb7be072580e618d",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlY"]),
      name: Chunk388032.intl.string(Chunk388032.t.sBk8mT)
    })
  },
  I = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID,
    assetId: "a_6f0c33fb534c1a0a21c606b50683e9a9",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuivx"]),
      name: Chunk388032.intl.string(Chunk388032.t.RbkXxR)
    })
  },
  T = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID,
    assetId: "a_46d01a1f046e4f58894f5b5361ab2e61",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlY"]),
      name: Chunk388032.intl.string(Chunk388032.t.RbkXxR)
    })
  },
  S = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID,
    assetId: "a_f6fbc6e9dedd53a1b70e5573499ddd11",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["6Zuivx"]),
      name: Chunk388032.intl.string(Chunk388032.t["FW3Qp/"])
    })
  },
  A = {
    skuId: Chunk242433.d.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID,
    assetId: "a_f8fdf29cd07f09487165818605cab1dd",
    a11yLabel: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.pDrI0m, {
      category: Chunk388032.intl.string(Chunk388032.t["2UeOlY"]),
      name: Chunk388032.intl.string(Chunk388032.t["FW3Qp/"])
    })
  },
  C = {
    gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"]
  },
  N = {
    variants: [{
      name: () => Chunk388032.intl.string(Chunk388032.t["9PzTtM"]),
      variants: [b, y]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t.sBk8mT),
      variants: [O, v]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t.RbkXxR),
      variants: [I, T]
    }, {
      name: () => Chunk388032.intl.string(Chunk388032.t["FW3Qp/"]),
      variants: [S, A]
    }],
    rewardAssetIdMap: (0, Chunk717401.YV)([b, y, O, v, I, T, S, A]),
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require.e("21723").then(require.bind(require, 421344)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        }),
        getGlowAnimationData: () => require.e("51924").then(require.bind(require, 90801)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      }
    },
    segmentedControlAnimations: {
      trick: {
        getAnimationData: () => require.e("44538").then(require.bind(require, 285517)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      },
      treat: {
        getAnimationData: () => require.e("35244").then(require.bind(require, 220628)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        })
      }
    },
    dismissibleContentVersion: (0, Chunk885472.m)(),
    firstTimeNotice: {
      getImageUrl: (e, t) => t ? _.Z : f.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.MzahXU),
      description: () => Chunk388032.intl.string(Chunk388032.t["F/5kFJ"]),
      cta: () => Chunk388032.intl.string(Chunk388032.t.RzWDqY),
      analyticsLocation: Chunk100527.Z.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk981631.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    planSelection: {
      heading: () => Chunk388032.intl.string(Chunk388032.t.ruVnPr),
      subheading: () => Chunk388032.intl.string(Chunk388032.t.q4BJSJ),
      mobileSubheading: e => l.intl.formatToPlainString(l.t.eDBuF8, {
        rewardCount: e
      }),
      gradientConfig: C,
      getImageUrl: (e, t) => t ? m.Z : h.Z,
      getBannerImageUrl: () => Chunk29653.Z,
      getBackgroundImageUrl: () => Chunk154658.Z
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.mMgymV),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.dAqTcI),
      getImageUrl: () => Chunk194950.Z,
      gradientConfig: () => C,
      getBackgroundImageUrl: () => Chunk306225.Z
    },
    billingSettingsMarketingBanner: {
      getImageUrl: e => e ? d.Z : u.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.CGgAyN),
      body: () => Chunk388032.intl.string(Chunk388032.t["9rInzW"]),
      getBackgroundImageUrl: () => Chunk103865.Z
    },
    giftPurchaseConfirmation: {
      yearGiftText: Chunk388032.t["rSS+oo"],
      monthGiftText: Chunk388032.t.gI6Yvv,
      collectRewardButtonText: () => Chunk388032.intl.string(Chunk388032.t.kMYVwv),
      rewardCollectedText: () => Chunk388032.intl.string(Chunk388032.t.eZrmtq)
    }
  }