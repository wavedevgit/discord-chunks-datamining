/** Chunk was on 5606 **/
/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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
  Chunk224850 = require("./224850.jsx"),
  Chunk552554 = require("./552554.js"),
  Chunk797255 = require("./797255.jsx"),
  Chunk103733 = require("./103733.js"),
  Chunk288351 = require("./288351.jsx"),
  Chunk160321 = require("./160321.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk232285 = require("./232285.js");
let I = Chunk64700.memo(Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    subscriptionTier: i,
    isEligibleForBogoPromotion: l
  } = e, {
    analyticsLocations: I
  } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), N = (0, x.N)(), P = (0, g.A)(), R = null != P, D = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
    visibilityPercentageRef: w,
    visibilityPercentage: L
  } = (0, C.U)(!D), M = (0, o.bG)([_.A], () => _.A.affinities), G = !R && M.length > 0, U = (0, f.c)(a.C.MARKETING_PAGE_BANNER), k = null != U && "marketingPageBanner" === U.properties.properties.oneofKind, H = (0, m.ar)() && !k;
  return (0, r.jsx)(p.f5, {
    value: I,
    children: (0, r.jsx)("div", {
      ref: t,
      className: s()(S.kL, n),
      "data-testid": "marketing-page-hero-header",
      children: (0, r.jsx)("div", {
        ref: w,
        children: (0, r.jsxs)("div", {
          className: S.hQ,
          children: [(0, r.jsx)(j.A, {
            containerVisibilityPercentage: L
          }), H && (0, r.jsx)("div", {
            className: S.XN,
            children: (0, r.jsx)(y.A, {
              enablePremiumBrandRefresh: true
            })
          }), (0, r.jsx)("div", {
            className: S.s8,
            children: (0, r.jsx)(c.Heading, {
              variant: "display-md",
              color: "text-strong",
              className: S.wx,
              children: v.intl.string(v.t.YCZldK)
            })
          }), (0, r.jsxs)("div", {
            className: S.rf,
            children: [R && (0, r.jsx)("div", {
              className: S.eZ,
              children: (0, r.jsx)(O.A, {
                referrer: P,
                enablePremiumBrandRefresh: true
              })
            }), G && (0, r.jsx)("div", {
              className: S.Qn,
              children: (0, r.jsx)(E.A, {
                textColor: "text-strong",
                smallerText: false,
                isApplicationHome: true,
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsxs)("div", {
              className: H ? S.es : S.UJ,
              children: [(0, r.jsx)(A.A, {
                size: "md",
                fullWidth: H,
                hasActivePromotion: !!l,
                subscriptionTier: k ? T.pe.NONE : i,
                buttonTextOverride: k ? v.intl.string(v.t["2pG5Ga"]) : true
              }), !H && (0, r.jsx)(h.A, {
                variant: "secondary",
                size: "md"
              })]
            }), (0, r.jsx)("div", {
              className: S.iQ,
              children: (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: v.intl.format(v.t.kt9wxs, {
                  cheapestMonthlyPrice: N
                })
              })
            }), null != U && "marketingPageBanner" === U.properties.properties.oneofKind && (0, r.jsx)(b.x, {
              componentId: U.id,
              promotionBannerMarketingComponentFields: U.properties.properties.marketingPageBanner
            })]
          })]
        })
      })
    })
  })
}))