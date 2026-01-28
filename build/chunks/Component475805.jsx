/** Chunk was on 5606 **/
/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
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
let N = Chunk64700.memo(Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    subscriptionTier: i,
    isEligibleForBogoPromotion: l,
    offerExpiresAt: N
  } = e, {
    analyticsLocations: P
  } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), R = (0, O.N)(), D = (0, g.A)(), w = null != D, L = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
    visibilityPercentageRef: M,
    visibilityPercentage: G
  } = (0, y.U)(!L), U = (0, o.bG)([_.A], () => _.A.affinities), k = !w && U.length > 0, H = (0, f.c)(a.C.MARKETING_PAGE_BANNER), B = null != H && "marketingPageBanner" === H.properties.properties.oneofKind, V = (0, m.ar)() && !B;
  return (0, r.jsx)(p.f5, {
    value: P,
    children: (0, r.jsx)("div", {
      ref: t,
      className: s()(I.kL, null != N && I.VW, n),
      "data-testid": "marketing-page-hero-header",
      children: (0, r.jsx)("div", {
        ref: M,
        children: (0, r.jsxs)("div", {
          className: I.hQ,
          children: [(0, r.jsx)(T.A, {
            containerVisibilityPercentage: G
          }), V && (null != N ? (0, r.jsx)(E.A, {
            expiresAt: N,
            className: I.IZ
          }) : (0, r.jsx)("div", {
            className: I.XN,
            children: (0, r.jsx)(j.A, {
              enablePremiumBrandRefresh: true
            })
          })), (0, r.jsx)("div", {
            className: I.s8,
            children: (0, r.jsx)(c.Heading, {
              variant: "display-md",
              color: "text-strong",
              className: I.wx,
              children: S.intl.string(S.t.YCZldK)
            })
          }), (0, r.jsxs)("div", {
            className: I.rf,
            children: [w && (0, r.jsx)("div", {
              className: I.eZ,
              children: (0, r.jsx)(C.A, {
                referrer: D,
                enablePremiumBrandRefresh: true
              })
            }), k && (0, r.jsx)("div", {
              className: I.Qn,
              children: (0, r.jsx)(x.A, {
                textColor: "text-strong",
                smallerText: false,
                isApplicationHome: true,
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsxs)("div", {
              className: V ? I.es : I.UJ,
              children: [(0, r.jsx)(A.A, {
                size: "md",
                fullWidth: V,
                hasActivePromotion: !!l,
                subscriptionTier: B ? v.pe.NONE : i,
                buttonTextOverride: B ? S.intl.string(S.t["2pG5Ga"]) : true
              }), !V && (0, r.jsx)(h.A, {
                variant: "secondary",
                size: "md"
              })]
            }), (0, r.jsx)("div", {
              className: I.iQ,
              children: (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: S.intl.format(S.t.kt9wxs, {
                  cheapestMonthlyPrice: R
                })
              })
            }), null != H && "marketingPageBanner" === H.properties.properties.oneofKind && (0, r.jsx)(b.x, {
              componentId: H.id,
              promotionBannerMarketingComponentFields: H.properties.properties.marketingPageBanner
            })]
          })]
        })
      })
    })
  })
}))