/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk266198 = require("./266198.js"),
  Chunk105759 = require("./105759.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk343287 = require("./343287.jsx"),
  Chunk422034 = require("./422034.jsx"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk638631 = require("./638631.jsx"),
  Chunk254139 = require("./254139.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let C = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a
    } = e, {
      analyticsLocations: C
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA), N = (0, _.Nx)(), R = (0, y.$)(), P = (0, h.Z)(), w = null != P, D = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      visibilityPercentageRef: x,
      visibilityPercentage: L
    } = (0, v.E)(!D), j = (0, s.e7)([f.Z], () => f.Z.affinities), M = !w && j.length > 0, {
      isEligible: k,
      cohort: U
    } = (0, p.Q1)();
    return (0, r.jsx)(d.Gt, {
      value: C,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(A.container, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: x,
          children: (0, r.jsxs)("div", {
            className: A.contentContainer,
            children: [(0, r.jsx)(T.Z, {
              containerVisibilityPercentage: L
            }), N && (0, r.jsx)("div", {
              className: A.offerPillContainer,
              children: (0, r.jsx)(I.Z, {
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsx)("div", {
              className: A.marketingPageTextContainer,
              children: (0, r.jsx)(l.X6q, {
                variant: "display-md",
                color: "header-primary",
                className: A.header,
                children: S.intl.string(S.t.YCZldH)
              })
            }), (0, r.jsxs)("div", {
              className: A.body,
              children: [w && (0, r.jsx)("div", {
                className: A.referrerAttributionContainer,
                children: (0, r.jsx)(O.Z, {
                  referrer: P,
                  enablePremiumBrandRefresh: true
                })
              }), M && (0, r.jsx)("div", {
                className: A.affinitiesContainer,
                children: (0, r.jsx)(b.Z, {
                  textColor: "text-primary",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), k && (0, r.jsx)(E.A, {
                cohort: U
              }), !k && (0, r.jsxs)("div", {
                className: N ? A.singleButtonContainer : A.twoButtonContainer,
                children: [(0, r.jsx)(g.Z, {
                  size: "md",
                  fullWidth: N,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !N && (0, r.jsx)(m.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: A.descriptionContainer,
                children: (0, r.jsx)(l.Text, {
                  color: "text-tertiary",
                  variant: "text-xs/medium",
                  children: k ? S.intl.string(S.t["6V7qRk"]) : S.intl.format(S.t.kt9wxs, {
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
  N = Chunk647438.memo(Chunk647438.forwardRef(C))