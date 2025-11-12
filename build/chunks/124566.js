/** Chunk was on web.js **/
/** chunk id: 124566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => O
});
var Chunk979554 = require("./979554.js"),
  Chunk242433 = require("./242433.js"),
  Chunk100527 = require("./100527.js"),
  Chunk717401 = require("./717401.js"),
  Chunk885472 = require("./885472.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk440071 = require("./440071.js"),
  Chunk414525 = require("./414525.js"),
  Chunk815301 = require("./815301.js"),
  Chunk233634 = require("./233634.js"),
  Chunk191333 = require("./191333.js"),
  Chunk81932 = require("./81932.js"),
  Chunk770476 = require("./770476.js");
let g = {
    skuId: Chunk242433.d.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
    assetId: "a_670b722e56740d11d1e6fe55b8094013",
    type: Chunk979554.Z.AVATAR_DECORATION,
    name: () => Chunk388032.intl.string(Chunk388032.t["R4q5+y"]),
    a11yLabel: () => Chunk388032.intl.string(Chunk388032.t.s1HWnQ)
  },
  E = {
    skuId: Chunk242433.d.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
    assetId: "nameplates/nameplates_v2/starfall_tides/",
    type: Chunk979554.Z.NAMEPLATE,
    palette: "sky",
    name: () => Chunk388032.intl.string(Chunk388032.t.OzB7sI),
    a11yLabel: () => Chunk388032.intl.string(Chunk388032.t.WX49A3)
  },
  b = {
    skuId: Chunk242433.d.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
    assetId: "a_6d99f670de3fcee669660fe262e896ea",
    type: Chunk979554.Z.AVATAR_DECORATION,
    name: () => Chunk388032.intl.string(Chunk388032.t.ZK9IyY),
    a11yLabel: () => Chunk388032.intl.string(Chunk388032.t["m/y43M"])
  },
  y = {
    gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
  },
  O = {
    rewards: [g, E, b],
    rewardAssetIdMap: (0, Chunk717401.YV)([g, E, b]),
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => require.e("31675").then(require.bind(require, 177648)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        }),
        getGlowAnimationData: () => Promise.resolve(null)
      }
    },
    dismissibleContentVersion: (0, Chunk885472.m)(),
    firstTimeNotice: {
      getImageUrl: (e, t) => t ? d.Z : u.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.Eeqjcv),
      description: () => Chunk388032.intl.string(Chunk388032.t["Wp+i/e"]),
      cta: () => Chunk388032.intl.string(Chunk388032.t.RzWDqY),
      analyticsLocation: Chunk100527.Z.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk981631.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    planSelection: {
      heading: () => Chunk388032.intl.string(Chunk388032.t.OEtqpm),
      subheading: function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
        return Chunk388032.intl.formatToPlainString(Chunk388032.t["2h5M+X"], {
          availableCount: module
        })
      },
      mobileSubheading: e => c.intl.formatToPlainString(c.t["2h5M+X"], {
        availableCount: e
      }),
      gradientConfig: y,
      getImageUrl: (e, t) => t ? _.Z : f.Z,
      getBannerImageUrl: () => Chunk770476.Z,
      getBackgroundImageUrl: () => Chunk81932.Z
    },
    planSelectionBanner: {
      desktopBannerText: () => Chunk388032.intl.string(Chunk388032.t.Abiuci),
      mobileBannerText: () => Chunk388032.intl.string(Chunk388032.t.cMiNit),
      getImageUrl: () => Chunk233634.Z,
      gradientConfig: () => y,
      getBackgroundImageUrl: () => Chunk770476.Z
    },
    billingSettingsMarketingBanner: {
      getImageUrl: e => e ? _.Z : f.Z,
      title: () => Chunk388032.intl.string(Chunk388032.t.Eeqjcv),
      body: () => Chunk388032.intl.string(Chunk388032.t.IuMZS3),
      getBackgroundImageUrl: () => Chunk191333.Z
    },
    giftPurchaseConfirmation: {
      yearGiftText: Chunk388032.t["0Z0G7m"],
      monthGiftText: Chunk388032.t.qyhlUP,
      collectRewardButtonText: () => Chunk388032.intl.string(Chunk388032.t["3d0Nmb"]),
      rewardCollectedText: () => Chunk388032.intl.string(Chunk388032.t.eZrmtq)
    }
  }