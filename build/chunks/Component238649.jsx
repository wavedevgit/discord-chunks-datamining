/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk951570 = require("./951570.js"),
  Chunk343287 = require("./343287.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk638631 = require("./638631.jsx"),
  Chunk946749 = require("./946749.jsx"),
  Chunk254139 = require("./254139.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let N = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a
    } = e, {
      analyticsLocations: N
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), R = (0, _.Nx)(), P = (0, y.$)(), w = (0, p.Z)(), D = null != w, x = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: L,
      visibilityPercentage: j
    } = (0, v.E)(!x), M = (0, s.e7)([f.Z], () => f.Z.affinities), k = !D && M.length > 0, {
      isEligible: U,
      cohort: G
    } = (0, g.Q1)();
    return (0, r.jsx)(d.Gt, {
      value: N,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(C.container, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: L,
          children: (0, r.jsxs)("div", {
            className: C.contentContainer,
            children: [(0, r.jsx)(S.Z, {
              containerVisibilityPercentage: j
            }), R && (0, r.jsx)("div", {
              className: C.offerPillContainer,
              children: (0, r.jsx)(I.Z, {
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsx)("div", {
              className: C.marketingPageTextContainer,
              children: (0, r.jsx)(T.Z, {
                children: A.intl.string(A.t["EW+VIS"])
              })
            }), (0, r.jsxs)("div", {
              className: C.body,
              children: [D && (0, r.jsx)("div", {
                className: C.referrerAttributionContainer,
                children: (0, r.jsx)(O.Z, {
                  referrer: w,
                  enablePremiumBrandRefresh: true
                })
              }), k && (0, r.jsx)("div", {
                className: C.affinitiesContainer,
                children: (0, r.jsx)(b.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), U && (0, r.jsx)(E.A, {
                subscriptionTier: i,
                cohort: G
              }), !U && (0, r.jsxs)("div", {
                className: R ? C.singleButtonContainer : C.twoButtonContainer,
                children: [(0, r.jsx)(m.Z, {
                  size: "md",
                  fullWidth: R,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !R && (0, r.jsx)(h.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: C.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: A.intl.format(A.t.kt9wxs, {
                    cheapestMonthlyPrice: P
                  })
                })
              })]
            })]
          })
        })
      })
    })
  },
  R = Chunk647438.memo(Chunk647438.forwardRef(N))