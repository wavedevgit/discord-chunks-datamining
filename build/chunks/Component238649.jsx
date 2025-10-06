/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk638631 = require("./638631.jsx"),
  Chunk254139 = require("./254139.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let S = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a
    } = e, {
      analyticsLocations: S
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), A = (0, _.Nx)(), C = (0, E.$)(), N = (0, p.Z)(), R = null != N, P = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: w,
      visibilityPercentage: D
    } = (0, y.E)(!P), L = (0, s.e7)([f.Z], () => f.Z.affinities), x = !R && L.length > 0;
    return (0, r.jsx)(d.Gt, {
      value: S,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(T.container, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: w,
          children: (0, r.jsxs)("div", {
            className: T.contentContainer,
            children: [(0, r.jsx)(v.Z, {
              containerVisibilityPercentage: D
            }), A && (0, r.jsx)("div", {
              className: T.offerPillContainer,
              children: (0, r.jsx)(O.Z, {
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsx)("div", {
              className: T.marketingPageTextContainer,
              children: (0, r.jsx)(l.X6q, {
                variant: "display-md",
                color: "header-primary",
                className: T.header,
                children: I.intl.string(I.t.YCZldH)
              })
            }), (0, r.jsxs)("div", {
              className: T.body,
              children: [R && (0, r.jsx)("div", {
                className: T.referrerAttributionContainer,
                children: (0, r.jsx)(b.Z, {
                  referrer: N,
                  enablePremiumBrandRefresh: true
                })
              }), x && (0, r.jsx)("div", {
                className: T.affinitiesContainer,
                children: (0, r.jsx)(g.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: A ? T.singleButtonContainer : T.twoButtonContainer,
                children: [(0, r.jsx)(m.Z, {
                  size: "md",
                  fullWidth: A,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !A && (0, r.jsx)(h.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: T.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: I.intl.format(I.t.kt9wxs, {
                    cheapestMonthlyPrice: C
                  })
                })
              })]
            })]
          })
        })
      })
    })
  },
  A = Chunk647438.memo(Chunk647438.forwardRef(S))