/** Chunk was on web.js **/
/** chunk id: 346033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk163594 = require("./163594.js"),
  Chunk476284 = require("./476284.js"),
  Chunk865215 = require("./865215.js");
let U = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(C.Z, {
      lifted: t
    }) : null
  },
  G = () => {
    var e, t;
    (0, Chunk214852.z)(Chunk433811.X);
    let n = Chunk647438.useRef(null),
      a = Chunk647438.useRef(null),
      C = Chunk647438.useRef(null),
      G = (0, Chunk410030.ZP)(),
      B = (0, Chunk780384.wj)(G),
      [Z, F] = Chunk647438.useState(false),
      [V, H] = Chunk647438.useState(false),
      [Y, W] = Chunk647438.useState(false),
      K = !Z && !V,
      [z, q] = Chunk647438.useState(false),
      X = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      Q = null != X ? (0, Chunk74538.Af)(X) : null,
      J = null != Q ? Chunk74538.ZP.getSkuIdForPlan(Q.planId) : null,
      $ = null !== J && J !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
      ee = (0, Chunk639119.N)(),
      et = null == ee || null == (e = ee.subscription_trial) ? true : module.sku_id,
      en = (0, Chunk140465.Nx)(),
      er = (0, Chunk367074.Vi)(),
      ei = null != er && er,
      ea = null == (t = (0, Chunk347896.Z)()) ? true : exports.billingSettingsMarketingBanner,
      {
        analyticsLocations: eo
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING);
    Chunk647438.useEffect(() => {
      q(true)
    }, []);
    let es = (0, Chunk951288.jsx)("div", {
      className: Chunk476284.premiumTierCardsContainerSettings,
      children: (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: require,
        onChange: e => H(e),
        threshold: .1,
        active: true,
        children: (0, Chunk951288.jsx)(Chunk823188.IY, {
          innerRef: require,
          tier0CTAButton: (0, Chunk951288.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_0,
            className: Chunk163594.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk163594.buttonShine
          }),
          tier2CTAButton: et === Chunk474936.Si.TIER_0 ? (0, Chunk951288.jsx)(Chunk784238.Z, {
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk163594.subButton,
            look: Chunk755721.iL.OUTLINED,
            color: Chunk755721.Tt.WHITE,
            buttonShineClassName: Chunk163594.buttonShine
          }) : (0, Chunk951288.jsx)(Chunk784238.Z, {
            color: Chunk755721.Tt.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            className: Chunk163594.subButton,
            hasActivePromotion: ei,
            textOptions: {
              textClassName: Chunk163594.subButtonText
            },
            buttonShineClassName: Chunk163594.buttonShine
          })
        })
      })
    });
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk476284.container,
      "data-cy": "tier-0-marketing-page",
      children: [(0, Chunk951288.jsx)(Chunk135785.Z, {
        premiumSubscription: X,
        className: o()(Chunk476284.existingSubscriberSpacing, {
          [Chunk476284.zIndex1]: en
        })
      }), (0, Chunk951288.jsx)(U, {
        inOfferExperience: en
      }), (0, Chunk951288.jsxs)("div", {
        className: o()({
          [Chunk476284.settingsContainer]: !en
        }),
        children: [null != ea && (0, Chunk951288.jsx)(Chunk218390.C, {
          className: Chunk476284.giftPromoCard,
          config: ea
        }), (0, Chunk951288.jsx)(Chunk622535.$, {
          innerRef: Chunk120356,
          onChange: e => F(e),
          threshold: 0,
          active: true,
          children: (0, Chunk951288.jsx)(Chunk635921.ZP, {
            ref: Chunk120356,
            subscriptionTier: $,
            className: o()({
              [Chunk476284.settingsHeroNoBackground]: en,
              [Chunk476284.trialMarketingMargin]: en,
              [Chunk476284.settingsHeroBogoHeight]: er,
              [Chunk476284.noTopPaddingOverride]: null != X
            }),
            isDarkMode: B
          })
        })]
      }), es, (0, Chunk951288.jsx)(Chunk177839.Z, {
        className: Chunk476284.perkCardsContainerSpacingSettings
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk476284.planComparisonTableContainer,
        children: (0, Chunk951288.jsx)(Chunk179984.Z, {
          className: Chunk476284.planComparisonTable,
          hideCTAs: true
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk476284.footerSpacing
      }), (0, Chunk951288.jsx)(Chunk349803.Z, {
        isVisible: K && z,
        subscriptionTier: $,
        isApplicationHome: false,
        isEligibleForBogoPromotion: er
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Chunk498765,
        onChange: e => {
          e && !Y && (g.default.track(x.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eo
          }), W(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: Chunk498765,
          className: Chunk476284.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk951288.jsx)("img", {
        src: Chunk865215,
        className: Chunk476284.bottomIllustration,
        width: 112,
        height: 85,
        alt: Chunk388032.intl.string(Chunk388032.t.X4IxWL)
      })]
    })
  }