/** Chunk was on web.js **/
/** chunk id: 187232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => A
});
var Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796909 = require("./796909.js"),
  Chunk893410 = require("./893410.js"),
  Chunk878339 = require("./878339.js"),
  Chunk733366 = require("./733366.js"),
  Chunk492336 = require("./492336.js"),
  Chunk457686 = require("./457686.js"),
  Chunk516773 = require("./516773.js"),
  Chunk198026 = require("./198026.js"),
  Chunk543980 = require("./543980.js");
let g = {
    skuId: "1287835633485877369",
    assetId: "a_33656b7ed12cde00c1826b654cf65590"
  },
  E = {
    skuId: "1287835633515102228",
    assetId: "a_c4395b178205217ad09cae605ef11b1a"
  },
  b = {
    skuId: "1287835633615765524",
    assetId: "a_41445f736db3525135b6b9e1122f2254"
  },
  y = {
    skuId: "1287835633645125653",
    assetId: "a_a78819f4d41900aa7698a1bafaf6af41"
  },
  O = {
    skuId: "1287835633674620949",
    assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80"
  },
  v = {
    skuId: "1287835633703845888",
    assetId: "a_a8c5af1848e53cc221d149442c03828f"
  },
  I = {
    skuId: "1287835633733341224",
    assetId: "a_4f2b75e5adff09709702613ea0e2cb70"
  },
  T = {
    skuId: "1287835633762701382",
    assetId: "a_604d1f0f336d41089acc3f82f458a99e"
  },
  S = {
    gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"]
  },
  A = {
    variants: [{
      listingId: "1303067552619958292",
      name: "Cat Ears",
      variants: [g, E]
    }, {
      name: "Dark Hood",
      variants: [b, y]
    }, {
      name: "Witch Hat",
      variants: [O, v]
    }, {
      listingId: "1303072627061166090",
      name: "Zombie Food",
      variants: [I, T]
    }],
    rewardAssetIdMap: (0, Chunk717401.YV)([g, E, b, y, O, v, I, T]),
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
      getImageUrl: () => Chunk733366.Z,
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
      mobileSubheading: e => s.intl.formatToPlainString(s.t.eDBuFx, {
        rewardCount: e
      }),
      gradientConfig: S,
      getImageUrl: () => Chunk457686.Z,
      getBannerImageUrl: () => Chunk543980.Z,
      getBackgroundImageUrl: () => Chunk796909.Z
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.mMgymZ),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.dAqTcH),
      getImageUrl: () => Chunk516773.Z,
      gradientConfig: () => S,
      getBackgroundImageUrl: () => Chunk492336.Z
    },
    billingSettingsMarketingBanner: {
      getAnimatedImageUrl: () => Chunk893410.Z,
      getStaticImageUrl: () => Chunk878339.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.CGgAyM),
      body: () => Chunk388032.intl.string(Chunk388032.t["9rInzc"]),
      getBackgroundImageUrl: () => Chunk198026.Z
    }
  }