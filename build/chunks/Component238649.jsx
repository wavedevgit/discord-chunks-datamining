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
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk638631 = require("./638631.jsx"),
  Chunk946749 = require("./946749.jsx"),
  Chunk254139 = require("./254139.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let A = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a
    } = e, {
      analyticsLocations: A
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), C = (0, _.Nx)(), N = (0, E.$)(), R = (0, p.Z)(), P = null != R, w = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: D,
      visibilityPercentage: x
    } = (0, y.E)(!w), L = (0, s.e7)([f.Z], () => f.Z.affinities), j = !P && L.length > 0;
    return (0, r.jsx)(d.Gt, {
      value: A,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(S.container, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: D,
          children: (0, r.jsxs)("div", {
            className: S.contentContainer,
            children: [(0, r.jsx)(I.Z, {
              containerVisibilityPercentage: x
            }), C && (0, r.jsx)("div", {
              className: S.offerPillContainer,
              children: (0, r.jsx)(O.Z, {
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsx)("div", {
              className: S.marketingPageTextContainer,
              children: (0, r.jsx)(v.Z, {
                children: T.intl.string(T.t["EW+VIS"])
              })
            }), (0, r.jsxs)("div", {
              className: S.body,
              children: [P && (0, r.jsx)("div", {
                className: S.referrerAttributionContainer,
                children: (0, r.jsx)(b.Z, {
                  referrer: R,
                  enablePremiumBrandRefresh: true
                })
              }), j && (0, r.jsx)("div", {
                className: S.affinitiesContainer,
                children: (0, r.jsx)(g.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: C ? S.singleButtonContainer : S.twoButtonContainer,
                children: [(0, r.jsx)(m.Z, {
                  size: "md",
                  fullWidth: C,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !C && (0, r.jsx)(h.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: S.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: T.intl.format(T.t.kt9wxs, {
                    cheapestMonthlyPrice: N
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