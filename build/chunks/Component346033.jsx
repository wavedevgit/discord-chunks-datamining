/** Chunk was on 30202 **/
/** chunk id: 346033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let M = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, i.jsx)(I.Z, {
      lifted: t
    }) : null
  },
  U = () => {
    var e, t;
    (0, Chunk214852.z)(Chunk433811.X);
    let n = Chunk73800.useRef(null),
      s = Chunk73800.useRef(null),
      I = Chunk73800.useRef(null),
      U = (0, Chunk410030.ZP)(),
      V = (0, Chunk780384.wj)(U),
      [G, F] = Chunk73800.useState(false),
      [H, z] = Chunk73800.useState(false),
      [W, Y] = Chunk73800.useState(false),
      [K, q] = Chunk73800.useState(false),
      X = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      J = null != X ? (0, Chunk74538.Af)(X) : null,
      Q = null != J ? Chunk74538.ZP.getSkuIdForPlan(J.planId) : null,
      $ = null !== Q && Q !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
      ee = (0, Chunk639119.N)(),
      et = null == ee || null == (e = ee.subscription_trial) ? true : module.sku_id,
      en = (0, Chunk140465.Nx)(),
      ei = (0, Chunk367074.Vi)(),
      er = null != ei && ei,
      es = null == (t = (0, Chunk347896.Z)()) ? true : exports.billingSettingsMarketingBanner,
      {
        analyticsLocations: ea
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING);
    Chunk73800.useEffect(() => {
      q(true)
    }, []);
    let el = (0, Chunk255367.jsx)("div", {
      className: Chunk689095.premiumTierCardsContainerSettings,
      children: (0, Chunk255367.jsx)(Chunk622535.$, {
        innerRef: require,
        onChange: e => z(e),
        threshold: .1,
        active: true,
        children: (0, Chunk255367.jsx)(Chunk823188.IY, {
          innerRef: require,
          tier0CTAButton: (0, Chunk255367.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_0,
            className: Chunk740150.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk740150.buttonShine
          }),
          tier2CTAButton: et === Chunk474936.Si.TIER_0 ? (0, Chunk255367.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk740150.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk740150.buttonShine
          }) : (0, Chunk255367.jsx)(Chunk784238.Z, {
            color: Chunk755721.Tt.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk740150.subButton,
            hasActivePromotion: er,
            textOptions: {
              textClassName: Chunk740150.subButtonText
            },
            buttonShineClassName: Chunk740150.buttonShine
          })
        })
      })
    });
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk689095.container,
      "data-cy": "tier-0-marketing-page",
      children: [(0, Chunk255367.jsx)(Chunk135785.Z, {
        premiumSubscription: X,
        className: a()(Chunk689095.existingSubscriberSpacing, {
          [Chunk689095.zIndex1]: en
        })
      }), (0, Chunk255367.jsx)(M, {
        inOfferExperience: en
      }), (0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsx)(Chunk622535.$, {
          innerRef: Chunk120356,
          onChange: e => F(e),
          threshold: 0,
          active: true,
          children: (0, Chunk255367.jsx)(Chunk635921.ZP, {
            ref: Chunk120356,
            subscriptionTier: $,
            className: a()({
              [Chunk689095.settingsHeroNoBackground]: en,
              [Chunk689095.trialMarketingMargin]: en,
              [Chunk689095.settingsHeroBogoHeight]: ei,
              [Chunk689095.noTopPaddingOverride]: null != X
            }),
            isDarkMode: V
          })
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk689095.promoBannerContainer,
        children: (0, Chunk255367.jsx)(Chunk8647.Z, {
          variant: Chunk8647.C.NITRO_SETTINGS
        })
      }), el, null != es && (0, Chunk255367.jsx)(Chunk218390.C, {
        className: Chunk689095.giftPromoCard,
        config: es
      }), (0, Chunk255367.jsx)(Chunk177839.Z, {
        className: Chunk689095.perkCardsContainerSpacingSettings
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk689095.planComparisonTableContainer,
        children: (0, Chunk255367.jsx)(Chunk179984.Z, {
          className: Chunk689095.planComparisonTable,
          hideCTAs: true
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk689095.footerSpacing
      }), (0, Chunk255367.jsx)(Chunk349803.Z, {
        isVisible: !G && !H && K,
        subscriptionTier: $,
        isApplicationHome: false,
        isEligibleForBogoPromotion: ei
      }), (0, Chunk255367.jsx)(Chunk622535.$, {
        innerRef: Chunk498765,
        onChange: e => {
          e && !W && (b.default.track(Z.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: ea
          }), Y(true))
        },
        children: (0, Chunk255367.jsx)("div", {
          ref: Chunk498765,
          className: Chunk689095.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk255367.jsx)("img", {
        src: Chunk865215,
        className: Chunk689095.bottomIllustration,
        width: 112,
        height: 85,
        alt: Chunk388032.intl.string(Chunk388032.t.X4IxWF)
      })]
    })
  }