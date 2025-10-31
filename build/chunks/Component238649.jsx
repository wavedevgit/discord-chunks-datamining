/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk357355 = require("./357355.js"),
  Chunk140465 = require("./140465.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let A = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a,
      offerExpiresAt: A
    } = e, {
      analyticsLocations: C
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), N = (0, _.Nx)(), R = (0, b.$)(), P = (0, p.Z)(), w = null != P, D = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: x,
      visibilityPercentage: L
    } = (0, O.E)(!D), M = (0, s.e7)([f.Z], () => f.Z.affinities), j = !w && M.length > 0;
    return (0, r.jsx)(d.Gt, {
      value: C,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(S.container, null != A && S.containerWithOfferCountdown, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: x,
          children: (0, r.jsxs)("div", {
            className: S.contentContainer,
            children: [(0, r.jsx)(I.Z, {
              containerVisibilityPercentage: L
            }), N && (null != A ? (0, r.jsx)(g.Z, {
              expiresAt: A,
              className: S.heroOfferCountdown
            }) : (0, r.jsx)("div", {
              className: S.offerPillContainer,
              children: (0, r.jsx)(v.Z, {
                enablePremiumBrandRefresh: true
              })
            })), (0, r.jsx)("div", {
              className: S.marketingPageTextContainer,
              children: (0, r.jsx)(l.Heading, {
                variant: "display-md",
                color: "header-primary",
                className: S.header,
                children: T.intl.string(T.t.YCZldK)
              })
            }), (0, r.jsxs)("div", {
              className: S.body,
              children: [w && (0, r.jsx)("div", {
                className: S.referrerAttributionContainer,
                children: (0, r.jsx)(y.Z, {
                  referrer: P,
                  enablePremiumBrandRefresh: true
                })
              }), j && (0, r.jsx)("div", {
                className: S.affinitiesContainer,
                children: (0, r.jsx)(E.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: N ? S.singleButtonContainer : S.twoButtonContainer,
                children: [(0, r.jsx)(m.Z, {
                  size: "md",
                  fullWidth: N,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !N && (0, r.jsx)(h.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: S.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: T.intl.format(T.t.kt9wxs, {
                    cheapestMonthlyPrice: R
                  })
                })
              })]
            })]
          })
        })
      })
    })
  },
  C = Chunk647438.memo(Chunk647438.forwardRef(A))