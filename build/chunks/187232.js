/** Chunk was on web.js **/
/** chunk id: 187232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => S
});
var Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk154658 = require("./154658.js"),
  Chunk362290 = require("./362290.js"),
  Chunk873048 = require("./873048.js"),
  Chunk306225 = require("./306225.js"),
  Chunk28986 = require("./28986.js"),
  Chunk194950 = require("./194950.js"),
  Chunk103865 = require("./103865.js"),
  Chunk29653 = require("./29653.js");
let m = {
    skuId: "1287835633485877369",
    assetId: "a_33656b7ed12cde00c1826b654cf65590"
  },
  g = {
    skuId: "1287835633515102228",
    assetId: "a_c4395b178205217ad09cae605ef11b1a"
  },
  E = {
    skuId: "1287835633615765524",
    assetId: "a_41445f736db3525135b6b9e1122f2254"
  },
  b = {
    skuId: "1287835633645125653",
    assetId: "a_a78819f4d41900aa7698a1bafaf6af41"
  },
  y = {
    skuId: "1287835633674620949",
    assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80"
  },
  O = {
    skuId: "1287835633703845888",
    assetId: "a_a8c5af1848e53cc221d149442c03828f"
  },
  v = {
    skuId: "1287835633733341224",
    assetId: "a_4f2b75e5adff09709702613ea0e2cb70"
  },
  I = {
    skuId: "1287835633762701382",
    assetId: "a_604d1f0f336d41089acc3f82f458a99e"
  },
  T = {
    gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"]
  },
  S = {
    variants: [{
      listingId: "1303067552619958292",
      name: "Cat Ears",
      variants: [m, g]
    }, {
      name: "Dark Hood",
      variants: [E, b]
    }, {
      name: "Witch Hat",
      variants: [y, O]
    }, {
      listingId: "1303072627061166090",
      name: "Zombie Food",
      variants: [v, I]
    }],
    rewardAssetIdMap: (0, Chunk717401.YV)([m, g, E, b, y, O, v, I]),
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require.e("2561").then(require.bind(require, 969666)).then(e => {
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
      mobileSubheading: e => s.intl.formatToPlainString(s.t.eDBuFx, {
        rewardCount: e
      }),
      gradientConfig: T,
      getImageUrl: () => Chunk28986.Z,
      getBannerImageUrl: () => Chunk29653.Z,
      getBackgroundImageUrl: () => Chunk154658.Z
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.mMgymZ),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.dAqTcH),
      getImageUrl: () => Chunk194950.Z,
      gradientConfig: () => T,
      getBackgroundImageUrl: () => Chunk306225.Z
    },
    billingSettingsMarketingBanner: {
      getAnimatedImageUrl: () => Chunk362290.Z,
      getStaticImageUrl: () => Chunk873048.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.CGgAyM),
      body: () => Chunk388032.intl.string(Chunk388032.t["9rInzc"]),
      getBackgroundImageUrl: () => Chunk103865.Z
    }
  }