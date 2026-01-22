/** Chunk was on web.js **/
/** chunk id: 657515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  zH: () => O
});
var Chunk575593 = require("./575593.js"),
  Chunk517950 = require("./517950.js"),
  Chunk793574 = require("./793574.js"),
  Chunk810498 = require("./810498.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk490111 = require("./490111.js"),
  Chunk910026 = require("./910026.js"),
  Chunk380212 = require("./380212.js"),
  Chunk876318 = require("./876318.js");
require("./642827.js"), require("./669531.js");
var Chunk320306 = require("./320306.js"),
  Chunk516738 = require("./516738.js"),
  Chunk604156 = require("./604156.js");
let m = {
    skuId: Chunk517950.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
    assetId: "a_670b722e56740d11d1e6fe55b8094013",
    type: Chunk575593.R.AVATAR_DECORATION,
    name: () => l.intl.string(l.t["R4q5+y"]),
    a11yLabel: () => l.intl.string(l.t.s1HWnQ)
  },
  g = {
    skuId: Chunk517950.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
    assetId: "nameplates/nameplates_v2/starfall_tides/",
    type: Chunk575593.R.NAMEPLATE,
    palette: "sky",
    name: () => l.intl.string(l.t.OzB7sI),
    a11yLabel: () => l.intl.string(l.t.WX49A3)
  },
  E = {
    skuId: Chunk517950.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
    assetId: "a_6d99f670de3fcee669660fe262e896ea",
    type: Chunk575593.R.AVATAR_DECORATION,
    name: () => l.intl.string(l.t.ZK9IyY),
    a11yLabel: () => l.intl.string(l.t["m/y43M"])
  },
  b = {
    gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
  },
  y = {
    gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
  },
  O = {
    rewards: [m, g, E],
    rewardAssetIdMap: (0, Chunk810498.t8)([m, g, E]),
    chatGiftIcon: {
      trinketsAnimation: {
        getAnimationData: () => n.e("51463").then(n.bind(n, 347066)).then(e => {
          let {
            default: t
          } = e;
          return fetch(t).then(e => e.json())
        }),
        getGlowAnimationData: () => Promise.resolve(null)
      },
      gradientConfig: {
        gradient: ["rgba(88, 101, 242, 0)", "rgba(88, 101, 242, 1)"]
      }
    },
    firstTimeNotice: {
      getImageUrl: (e, t) => t ? u.A : c.A,
      title: () => l.intl.string(l.t.Eeqjcv),
      description: () => l.intl.string(l.t["Wp+i/e"]),
      cta: () => l.intl.string(l.t.RzWDqY),
      analyticsLocation: Chunk793574.A.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk652215.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    reminderNagbar: {
      description: () => l.intl.string(l.t.veQg0t),
      cta: () => l.intl.string(l.t.RzWDqY),
      analyticsLocation: Chunk793574.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
      analyticsPage: Chunk652215.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    reminderNotice: {
      getImageUrl: (e, t) => t ? u.A : c.A,
      title: () => l.intl.string(l.t.bLOiLM),
      description: () => l.intl.string(l.t["cE/UX7"]),
      cta: () => l.intl.string(l.t.RzWDqY),
      analyticsLocation: Chunk793574.A.GIFTING_PROMOTION_COACHMARK,
      analyticsPage: Chunk652215.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
    },
    planSelection: {
      heading: () => l.intl.string(l.t.OEtqpm),
      subheading: function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
        return l.intl.formatToPlainString(l.t["2h5M+X"], {
          availableCount: e
        })
      },
      mobileSubheading: e => l.intl.formatToPlainString(l.t["2h5M+X"], {
        availableCount: e
      }),
      gradientConfig: b,
      getImageUrl: (e, t) => t ? f.A : d.A,
      getBannerImageUrl: () => h.A,
      getBackgroundImageUrl: () => _.A
    },
    planSelectionBanner: {
      desktopBannerText: () => l.intl.string(l.t.Abiuci),
      mobileBannerText: () => l.intl.string(l.t.cMiNit),
      getImageUrl: () => f.A,
      gradientConfig: () => b,
      getBackgroundImageUrl: () => h.A
    },
    billingSettingsMarketingBanner: {
      getImageUrl: e => e ? f.A : d.A,
      title: () => l.intl.string(l.t.Eeqjcv),
      body: () => l.intl.string(l.t.IuMZS3),
      getBackgroundImageUrl: () => p.A,
      gradientConfig: y
    },
    giftPurchaseConfirmation: {
      yearGiftText: Chunk985018.t["0Z0G7m"],
      monthGiftText: Chunk985018.t.qyhlUP,
      collectRewardButtonText: () => l.intl.string(l.t.kMYVwv),
      rewardCollectedText: () => l.intl.string(l.t.eZrmtq)
    },
    rewardSelection: {
      heading: () => l.intl.string(l.t["3JCuX1"]),
      primarySubtitle: () => l.intl.string(l.t.h2nMp0),
      secondarySubtitle: () => l.intl.string(l.t.y5wftM)
    }
  }