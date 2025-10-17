/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk431 = require("./431.js"),
  Chunk357355 = require("./357355.js"),
  Chunk140465 = require("./140465.js"),
  Chunk931118 = require("./931118.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk105759 = require("./105759.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk403503 = require("./403503.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk638631 = require("./638631.jsx"),
  Chunk254139 = require("./254139.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let w = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a
    } = e, {
      analyticsLocations: w
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), D = (0, p.Nx)(), L = (0, I.$)(), x = (0, E.Z)(), M = null != x, k = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: j,
      visibilityPercentage: U
    } = (0, S.E)(!k), G = (0, s.e7)([_.Z], () => _.Z.affinities), B = !M && G.length > 0, {
      variant: Z
    } = (0, h.ZP)("PremiumBrandRefreshMarketingHeroHeading"), F = (0, g.N)(), V = (0, m.Ng)(), H = f.Z.getAlmostExpiringTrialOffers([N.Si.TIER_2]).length > 0 && null != F && null != F.expires_at && F.trial_id !== N.a7, Y = f.Z.getAlmostExpiringDiscountOffers([N.Si.TIER_2]).length > 0 && null != V && null != V.expires_at, W = Z === h.tE.HERO_COUNTDOWN && (H || Y), K = H ? F.expires_at : Y ? V.expires_at : null;
    return (0, r.jsx)(d.Gt, {
      value: w,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(P.container, W && P.containerWithOfferCountdown, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: j,
          children: (0, r.jsxs)("div", {
            className: P.contentContainer,
            children: [(0, r.jsx)(C.Z, {
              containerVisibilityPercentage: U
            }), D && (W && null != K ? (0, r.jsx)(O.Z, {
              expiresAt: K,
              className: P.heroOfferCountdown
            }) : (0, r.jsx)("div", {
              className: P.offerPillContainer,
              children: (0, r.jsx)(A.Z, {
                enablePremiumBrandRefresh: true
              })
            })), (0, r.jsx)("div", {
              className: P.marketingPageTextContainer,
              children: (0, r.jsx)(l.Heading, {
                variant: "display-md",
                color: "header-primary",
                className: P.header,
                children: R.intl.string(R.t.YCZldH)
              })
            }), (0, r.jsxs)("div", {
              className: P.body,
              children: [M && (0, r.jsx)("div", {
                className: P.referrerAttributionContainer,
                children: (0, r.jsx)(T.Z, {
                  referrer: x,
                  enablePremiumBrandRefresh: true
                })
              }), B && (0, r.jsx)("div", {
                className: P.affinitiesContainer,
                children: (0, r.jsx)(v.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: D ? P.singleButtonContainer : P.twoButtonContainer,
                children: [(0, r.jsx)(y.Z, {
                  size: "md",
                  fullWidth: D,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !D && (0, r.jsx)(b.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: P.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: R.intl.format(R.t.kt9wxs, {
                    cheapestMonthlyPrice: L
                  })
                })
              })]
            })]
          })
        })
      })
    })
  },
  D = Chunk647438.memo(Chunk647438.forwardRef(w))