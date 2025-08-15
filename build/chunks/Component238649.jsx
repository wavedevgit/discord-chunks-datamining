/** Chunk was on 30202 **/
/** chunk id: 238649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk123274 = require("./123274.jsx"),
  Chunk638631 = require("./638631.jsx"),
  Chunk645616 = require("./645616.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350169 = require("./350169.js");
let T = Chunk73800.memo(Chunk73800.forwardRef((e, t) => {
  let {
    className: n,
    subscriptionTier: r,
    isEligibleForBogoPromotion: s
  } = e, {
    analyticsLocations: T
  } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), N = (0, p.Nx)(), I = (0, x.$)(), y = (0, g.Z)(), A = null != y, P = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
    visibilityPercentageRef: R,
    visibilityPercentage: D
  } = (0, j.E)(!P), Z = (0, l.e7)([m.Z], () => m.Z.affinities), w = !A && Z.length > 0;
  return (0, i.jsx)(u.Gt, {
    value: T,
    children: (0, i.jsx)("div", {
      ref: t,
      className: a()(S.container, n),
      "data-testid": "marketing-page-hero-header",
      children: (0, i.jsx)("div", {
        ref: R,
        children: (0, i.jsxs)("div", {
          className: S.contentContainer,
          children: [(0, i.jsx)(O.Z, {
            containerVisibilityPercentage: D
          }), N && (0, i.jsx)("div", {
            className: S.offerPillContainer,
            children: (0, i.jsx)(C.Z, {
              enablePremiumBrandRefresh: true
            })
          }), (0, i.jsx)("div", {
            className: S.marketingPageTextContainer,
            children: (0, i.jsx)(E.Z, {
              children: v.intl.string(v.t["EW+VIS"])
            })
          }), (0, i.jsxs)("div", {
            className: S.body,
            children: [A && (0, i.jsx)("div", {
              className: S.referrerAttributionContainer,
              children: (0, i.jsx)(_.Z, {
                referrer: y,
                enablePremiumBrandRefresh: true
              })
            }), w && (0, i.jsx)("div", {
              className: S.affinitiesContainer,
              children: (0, i.jsx)(b.Z, {
                textColor: "text-primary",
                smallerText: false,
                isApplicationHome: true,
                enablePremiumBrandRefresh: true
              })
            }), (0, i.jsxs)("div", {
              className: N ? S.singleButtonContainer : S.twoButtonContainer,
              children: [(0, i.jsx)(f.Z, {
                size: "md",
                fullWidth: N,
                hasActivePromotion: !!s,
                subscriptionTier: r
              }), !N && (0, i.jsx)(h.Z, {
                variant: "secondary",
                size: "md"
              })]
            }), (0, i.jsx)("div", {
              className: S.descriptionContainer,
              children: (0, i.jsx)(o.Text, {
                color: "text-tertiary",
                variant: "text-xs/medium",
                children: v.intl.format(v.t.kt9wxs, {
                  cheapestMonthlyPrice: I
                })
              })
            })]
          })]
        })
      })
    })
  })
}))