/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
let P = (e, t) => {
    var n;
    let {
      className: i,
      subscriptionTier: a,
      isEligibleForBogoPromotion: P
    } = e, {
      analyticsLocations: w
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), D = (0, p.Nx)(), L = (0, v.$)(), x = (0, g.Z)(), M = null != x, j = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: k,
      visibilityPercentage: U
    } = (0, T.E)(!j), G = (0, s.e7)([_.Z], () => _.Z.affinities), B = !M && G.length > 0, Z = (0, m.N)(), F = (0, h.Ng)(), V = null != (n = null == Z ? true : Z.expires_at) ? n : null == F ? true : F.expires_at, H = f.Z.getAlmostExpiringTrialOffers([C.Si.TIER_2]), Y = f.Z.getAlmostExpiringDiscountOffers([C.Si.TIER_2]), W = null != V && (H.length > 0 || Y.length > 0);
    return (0, r.jsx)(d.Gt, {
      value: w,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(R.container, W && R.containerWithOfferCountdown, i),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: k,
          children: (0, r.jsxs)("div", {
            className: R.contentContainer,
            children: [(0, r.jsx)(A.Z, {
              containerVisibilityPercentage: U
            }), D && (W ? (0, r.jsx)(y.Z, {
              expiresAt: V,
              className: R.heroOfferCountdown
            }) : (0, r.jsx)("div", {
              className: R.offerPillContainer,
              children: (0, r.jsx)(S.Z, {
                enablePremiumBrandRefresh: true
              })
            })), (0, r.jsx)("div", {
              className: R.marketingPageTextContainer,
              children: (0, r.jsx)(l.Heading, {
                variant: "display-md",
                color: "header-primary",
                className: R.header,
                children: N.intl.string(N.t.YCZldH)
              })
            }), (0, r.jsxs)("div", {
              className: R.body,
              children: [M && (0, r.jsx)("div", {
                className: R.referrerAttributionContainer,
                children: (0, r.jsx)(I.Z, {
                  referrer: x,
                  enablePremiumBrandRefresh: true
                })
              }), B && (0, r.jsx)("div", {
                className: R.affinitiesContainer,
                children: (0, r.jsx)(O.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: D ? R.singleButtonContainer : R.twoButtonContainer,
                children: [(0, r.jsx)(b.Z, {
                  size: "md",
                  fullWidth: D,
                  hasActivePromotion: !!P,
                  subscriptionTier: a
                }), !D && (0, r.jsx)(E.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: R.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: N.intl.format(N.t.kt9wxs, {
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
  w = Chunk647438.memo(Chunk647438.forwardRef(P))