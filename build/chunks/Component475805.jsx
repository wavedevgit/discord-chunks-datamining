/** Chunk was on web.js **/
/** chunk id: 475805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk560138 = require("./560138.js"),
  Chunk526292 = require("./526292.js"),
  Chunk236834 = require("./236834.js"),
  Chunk549996 = require("./549996.js"),
  Chunk371764 = require("./371764.jsx"),
  Chunk65470 = require("./65470.jsx"),
  Chunk792656 = require("./792656.jsx"),
  Chunk939724 = require("./939724.jsx"),
  Chunk224850 = require("./224850.jsx"),
  Chunk552554 = require("./552554.js"),
  Chunk797255 = require("./797255.jsx"),
  Chunk103733 = require("./103733.js"),
  Chunk288351 = require("./288351.jsx"),
  Chunk160321 = require("./160321.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk232285 = require("./232285.js");
let w = (e, t) => {
    let {
      className: n,
      subscriptionTier: i,
      isEligibleForBogoPromotion: a,
      offerExpiresAt: w
    } = e, {
      analyticsLocations: P
    } = (0, f.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), D = (0, A.N)(), x = (0, h.A)(), L = null != x, j = (0, l.bG)([u.A], () => u.A.useReducedMotion), {
      visibilityPercentageRef: M,
      visibilityPercentage: k
    } = (0, S.U)(!j), U = (0, l.bG)([p.A], () => p.A.affinities), G = !L && U.length > 0, V = (0, m.c)(o.C.MARKETING_PAGE_BANNER), F = null != V && "marketingPageBanner" === V.properties.properties.oneofKind, B = (0, _.ar)() && !F;
    return (0, r.jsx)(f.f5, {
      value: P,
      children: (0, r.jsx)("div", {
        ref: t,
        className: s()(R.kL, null != w && R.VW, n),
        "data-testid": "marketing-page-hero-header",
        children: (0, r.jsx)("div", {
          ref: M,
          children: (0, r.jsxs)("div", {
            className: R.hQ,
            children: [(0, r.jsx)(T.A, {
              containerVisibilityPercentage: k
            }), B && (null != w ? (0, r.jsx)(y.A, {
              expiresAt: w,
              className: R.IZ
            }) : (0, r.jsx)("div", {
              className: R.XN,
              children: (0, r.jsx)(I.A, {
                enablePremiumBrandRefresh: true
              })
            })), (0, r.jsx)("div", {
              className: R.s8,
              children: (0, r.jsx)(c.Heading, {
                variant: "display-md",
                color: "text-strong",
                className: R.wx,
                children: N.intl.string(N.t.YCZldK)
              })
            }), (0, r.jsxs)("div", {
              className: R.rf,
              children: [L && (0, r.jsx)("div", {
                className: R.eZ,
                children: (0, r.jsx)(v.A, {
                  referrer: x,
                  enablePremiumBrandRefresh: true
                })
              }), G && (0, r.jsx)("div", {
                className: R.Qn,
                children: (0, r.jsx)(O.A, {
                  textColor: "text-strong",
                  smallerText: false,
                  isApplicationHome: true,
                  enablePremiumBrandRefresh: true
                })
              }), (0, r.jsxs)("div", {
                className: B ? R.es : R.UJ,
                children: [(0, r.jsx)(b.A, {
                  size: "md",
                  fullWidth: B,
                  hasActivePromotion: !!a,
                  subscriptionTier: F ? C.pe.NONE : i,
                  buttonTextOverride: F ? N.intl.string(N.t["2pG5Ga"]) : true
                }), !B && (0, r.jsx)(E.A, {
                  variant: "secondary",
                  size: "md"
                })]
              }), (0, r.jsx)("div", {
                className: R.iQ,
                children: (0, r.jsx)(c.Text, {
                  color: "text-muted",
                  variant: "text-xs/medium",
                  children: N.intl.format(N.t.kt9wxs, {
                    cheapestMonthlyPrice: D
                  })
                })
              }), null != V && "marketingPageBanner" === V.properties.properties.oneofKind && (0, r.jsx)(g.x, {
                componentId: V.id,
                promotionBannerMarketingComponentFields: V.properties.properties.marketingPageBanner
              })]
            })]
          })
        })
      })
    })
  },
  P = Chunk64700.memo(Chunk64700.forwardRef(w))