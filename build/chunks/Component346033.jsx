/** Chunk was on web.js **/
/** chunk id: 346033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk433811 = require("./433811.js"),
  Chunk214852 = require("./214852.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk140465 = require("./140465.js"),
  Chunk347896 = require("./347896.js"),
  Chunk639119 = require("./639119.js"),
  Chunk8647 = require("./8647.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk218390 = require("./218390.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk135785 = require("./135785.jsx"),
  Chunk498765 = require("./498765.jsx"),
  Chunk635921 = require("./635921.jsx"),
  Chunk177839 = require("./177839.jsx"),
  Chunk349803 = require("./349803.jsx"),
  Chunk179984 = require("./179984.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740150 = require("./740150.js"),
  Chunk689095 = require("./689095.js"),
  Chunk865215 = require("./865215.js");
let G = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(N.Z, {
      lifted: t
    }) : null
  },
  B = () => {
    var e, t;
    (0, Chunk214852.z)(Chunk433811.X);
    let n = Chunk647438.useRef(null),
      a = Chunk647438.useRef(null),
      N = Chunk647438.useRef(null),
      B = (0, Chunk410030.ZP)(),
      Z = (0, Chunk780384.wj)(B),
      [V, F] = Chunk647438.useState(false),
      [H, Y] = Chunk647438.useState(false),
      [W, K] = Chunk647438.useState(false),
      z = !V && !H,
      [q, X] = Chunk647438.useState(false),
      Q = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      J = null != Q ? (0, Chunk74538.Af)(Q) : null,
      $ = null != J ? Chunk74538.ZP.getSkuIdForPlan(J.planId) : null,
      ee = null !== $ && $ !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
      et = (0, Chunk639119.N)(),
      en = null == et || null == (e = et.subscription_trial) ? true : module.sku_id,
      er = (0, Chunk140465.Nx)(),
      ei = (0, Chunk367074.Vi)(),
      ea = null != ei && ei,
      eo = null == (t = (0, Chunk347896.Z)()) ? true : exports.billingSettingsMarketingBanner,
      {
        analyticsLocations: es
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING);
    Chunk647438.useEffect(() => {
      X(true)
    }, []);
    let el = (0, Chunk951288.jsx)("div", {
      className: Chunk689095.premiumTierCardsContainerSettings,
      children: (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: require,
        onChange: e => Y(e),
        threshold: .1,
        active: true,
        children: (0, Chunk951288.jsx)(Chunk823188.IY, {
          innerRef: require,
          tier0CTAButton: (0, Chunk951288.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_0,
            className: Chunk740150.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk740150.buttonShine
          }),
          tier2CTAButton: en === Chunk474936.Si.TIER_0 ? (0, Chunk951288.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk740150.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk740150.buttonShine
          }) : (0, Chunk951288.jsx)(Chunk784238.Z, {
            color: Chunk755721.Tt.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk740150.subButton,
            hasActivePromotion: ea,
            textOptions: {
              textClassName: Chunk740150.subButtonText
            },
            buttonShineClassName: Chunk740150.buttonShine
          })
        })
      })
    });
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk689095.container,
      "data-cy": "tier-0-marketing-page",
      children: [(0, Chunk951288.jsx)(Chunk135785.Z, {
        premiumSubscription: Q,
        className: o()(Chunk689095.existingSubscriberSpacing, {
          [Chunk689095.zIndex1]: er
        })
      }), (0, Chunk951288.jsx)(G, {
        inOfferExperience: er
      }), (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk622535.$, {
          innerRef: Chunk120356,
          onChange: e => F(e),
          threshold: 0,
          active: true,
          children: (0, Chunk951288.jsx)(Chunk635921.ZP, {
            ref: Chunk120356,
            subscriptionTier: ee,
            className: o()({
              [Chunk689095.settingsHeroNoBackground]: er,
              [Chunk689095.trialMarketingMargin]: er,
              [Chunk689095.settingsHeroBogoHeight]: ei,
              [Chunk689095.noTopPaddingOverride]: null != Q
            }),
            isDarkMode: Z
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk689095.promoBannerContainer,
        children: (0, Chunk951288.jsx)(Chunk8647.Z, {
          variant: Chunk8647.C.NITRO_SETTINGS
        })
      }), el, null != eo && (0, Chunk951288.jsx)(Chunk218390.C, {
        className: Chunk689095.giftPromoCard,
        config: eo
      }), (0, Chunk951288.jsx)(Chunk177839.Z, {
        className: Chunk689095.perkCardsContainerSpacingSettings
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk689095.planComparisonTableContainer,
        children: (0, Chunk951288.jsx)(Chunk179984.Z, {
          className: Chunk689095.planComparisonTable,
          hideCTAs: true
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk689095.footerSpacing
      }), (0, Chunk951288.jsx)(Chunk349803.Z, {
        isVisible: z && q,
        subscriptionTier: ee,
        isApplicationHome: false,
        isEligibleForBogoPromotion: ei
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Chunk498765,
        onChange: e => {
          e && !W && (g.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: es
          }), K(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: Chunk498765,
          className: Chunk689095.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk951288.jsx)("img", {
        src: Chunk865215,
        className: Chunk689095.bottomIllustration,
        width: 112,
        height: 85,
        alt: Chunk388032.intl.string(Chunk388032.t.X4IxWF)
      })]
    })
  }