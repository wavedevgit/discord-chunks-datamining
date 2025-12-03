/** Chunk was on web.js **/
/** chunk id: 238649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk79766 = require("./79766.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk357355 = require("./357355.js"),
  Chunk140465 = require("./140465.js"),
  Chunk105759 = require("./105759.js"),
  Chunk715130 = require("./715130.js"),
  Chunk179918 = require("./179918.jsx"),
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
let P = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a,
      offerExpiresAt: P
    } = e, {
      analyticsLocations: R
    } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), w = (0, _.Nx)(), D = (0, v.$)(), x = (0, m.Z)(), L = null != x, j = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), {
      visibilityPercentageRef: M,
      visibilityPercentage: k
    } = (0, I.E)(!j), U = (0, l.e7)([p.Z], () => p.Z.affinities), G = !L && U.length > 0, Z = (0, h.H)(s.I.MARKETING_PAGE_BANNER);
    return (0, r.jsx)(f.Gt, {
      value: R,
      children: (0, r.jsx)("div", {
        ref: t,
        className: o()(N.container, null != P && N.containerWithOfferCountdown, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: M,
          children: (0, r.jsxs)("div", {
            className: N.contentContainer,
            children: [(0, r.jsx)(A.Z, {
              containerVisibilityPercentage: k
            }), w && (null != P ? (0, r.jsx)(y.Z, {
              expiresAt: P,
              className: N.heroOfferCountdown
            }) : (0, r.jsx)("div", {
              className: N.offerPillContainer,
              children: (0, r.jsx)(T.Z, {
                enablePremiumBrandRefresh: true
              })
            })), (0, r.jsx)("div", {
              className: N.marketingPageTextContainer,
              children: (0, r.jsx)(c.Heading, {
                variant: "display-md",
                color: "header-primary",
                className: N.header,
                children: C.intl.string(C.t.YCZldK)
              })
            }), (0, r.jsxs)("div", {
              className: N.body,
              children: [L && (0, r.jsx)("div", {
                className: N.referrerAttributionContainer,
                children: (0, r.jsx)(S.Z, {
                  referrer: x,
                  enablePremiumBrandRefresh: true
                })
              }), G && (0, r.jsx)("div", {
                className: N.affinitiesContainer,
                children: (0, r.jsx)(O.Z, {
                  textColor: "text-strong",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: w ? N.singleButtonContainer : N.twoButtonContainer,
                children: [(0, r.jsx)(b.Z, {
                  size: "md",
                  fullWidth: w,
                  hasActivePromotion: !!a,
                  subscriptionTier: i
                }), !w && (0, r.jsx)(E.Z, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: N.descriptionContainer,
                children: (0, r.jsx)(c.Text, {
                  color: "text-muted",
                  variant: "text-xs/medium",
                  children: C.intl.format(C.t.kt9wxs, {
                    cheapestMonthlyPrice: D
                  })
                })
              }), null != Z && "marketingPageBanner" === Z.properties.properties.oneofKind && (0, r.jsx)(g.u, {
                componentId: Z.id,
                promotionBannerMarketingComponentFields: Z.properties.properties.marketingPageBanner
              })]
            })]
          })
        })
      })
    })
  },
  R = Chunk473749.memo(Chunk473749.forwardRef(P))