/** Chunk was on web.js **/
/** chunk id: 346033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk529663 = require("./529663.js"),
  Chunk711479 = require("./711479.js"),
  Chunk865215 = require("./865215.js");
let U = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(A.Z, {
      lifted: t
    }) : null
  },
  G = () => {
    var e, t;
    (0, h.z)(_.X);
    let n = i.useRef(null),
      a = i.useRef(null),
      A = i.useRef(null),
      G = (0, d.ZP)(),
      Z = (0, c.wj)(G),
      [F, B] = i.useState(false),
      [V, H] = i.useState(false),
      [Y, W] = i.useState(false),
      K = !F && !V,
      [z, q] = i.useState(false),
      Q = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
      X = null != Q ? (0, E.Af)(Q) : null,
      J = null != X ? E.ZP.getSkuIdForPlan(X.planId) : null,
      $ = null !== J && J !== D.Si.TIER_2 ? D.Si.TIER_2 : null,
      ee = (0, v.N)(),
      et = null == ee || null == (e = ee.subscription_trial) ? true : e.sku_id,
      en = (0, y.Nx)(),
      er = (0, b.Vi)(),
      ei = null != er && er,
      ea = null == (t = (0, O.Z)()) ? true : t.billingSettingsMarketingBanner,
      {
        analyticsLocations: eo
      } = (0, p.ZP)(f.Z.PREMIUM_MARKETING);
    i.useEffect(() => {
      q(true)
    }, []);
    let es = (0, r.jsx)("div", {
      className: M.premiumTierCardsContainerSettings,
      children: (0, r.jsx)(l.$, {
        innerRef: n,
        onChange: e => H(e),
        threshold: .1,
        active: true,
        children: (0, r.jsx)(T.IY, {
          innerRef: n,
          tier0CTAButton: (0, r.jsx)(S.Z, {
            showIcon: false,
            subscriptionTier: D.Si.TIER_0,
            className: j.subButton,
            look: u.iL.OUTLINED,
            color: u.Tt.WHITE,
            buttonShineClassName: j.buttonShine
          }),
          tier2CTAButton: et === D.Si.TIER_0 ? (0, r.jsx)(S.Z, {
            showIcon: false,
            subscriptionTier: D.Si.TIER_2,
            className: j.subButton,
            look: u.iL.OUTLINED,
            color: u.Tt.WHITE,
            buttonShineClassName: j.buttonShine
          }) : (0, r.jsx)(S.Z, {
            color: u.Tt.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: D.Si.TIER_2,
            className: j.subButton,
            hasActivePromotion: ei,
            textOptions: {
              textClassName: j.subButtonText
            },
            buttonShineClassName: j.buttonShine
          })
        })
      })
    });
    return (0, r.jsxs)("div", {
      className: M.container,
      "data-cy": "tier-0-marketing-page",
      children: [(0, r.jsx)(C.Z, {
        premiumSubscription: Q,
        className: o()(M.existingSubscriberSpacing, {
          [M.zIndex1]: en
        })
      }), (0, r.jsx)(U, {
        inOfferExperience: en
      }), (0, r.jsxs)("div", {
        className: o()({
          [M.settingsContainer]: !en
        }),
        children: [null != ea && (0, r.jsx)(I.C, {
          className: M.giftPromoCard,
          config: ea
        }), (0, r.jsx)(l.$, {
          innerRef: a,
          onChange: e => B(e),
          threshold: 0,
          active: true,
          children: (0, r.jsx)(N.ZP, {
            ref: a,
            subscriptionTier: $,
            className: o()({
              [M.settingsHeroNoBackground]: en,
              [M.trialMarketingMargin]: en,
              [M.settingsHeroBogoHeight]: er,
              [M.noTopPaddingOverride]: null != Q
            }),
            isDarkMode: Z
          })
        })]
      }), es, (0, r.jsx)(P.Z, {
        className: M.perkCardsContainerSpacingSettings
      }), (0, r.jsx)("div", {
        className: M.planComparisonTableContainer,
        children: (0, r.jsx)(R.Z, {
          className: M.planComparisonTable,
          hideCTAs: true
        })
      }), (0, r.jsx)("div", {
        className: M.footerSpacing
      }), (0, r.jsx)(w.Z, {
        isVisible: K && z,
        subscriptionTier: $,
        isApplicationHome: false,
        isEligibleForBogoPromotion: er
      }), (0, r.jsx)(l.$, {
        innerRef: A,
        onChange: e => {
          e && !Y && (g.default.track(x.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eo
          }), W(true))
        },
        children: (0, r.jsx)("div", {
          ref: A,
          className: M.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)("img", {
        src: k,
        className: M.bottomIllustration,
        width: 112,
        height: 85,
        alt: L.intl.string(L.t.X4IxWL)
      })]
    })
  }