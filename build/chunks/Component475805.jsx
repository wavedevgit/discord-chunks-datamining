/** Chunk was on 60667 **/
/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
let y = Chunk64700.memo(Chunk64700.forwardRef((e, t) => {
  let {
    className: n,
    subscriptionTier: i,
    isEligibleForBogoPromotion: l,
    offerExpiresAt: y
  } = e, {
    analyticsLocations: P
  } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), R = (0, O.N)(), D = (0, g.A)(), w = null != D, L = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
    visibilityPercentageRef: M,
    visibilityPercentage: U
  } = (0, I.U)(!L), G = (0, o.bG)([p.A], () => p.A.affinities), k = !w && G.length > 0, V = (0, A.c)(a.C.MARKETING_PAGE_BANNER), H = null != V && "marketingPageBanner" === V.properties.properties.oneofKind, B = (0, m.ar)() && !H;
  return (0, r.jsx)(_.f5, {
    value: P,
    children: (0, r.jsx)("div", {
      ref: t,
      className: s()(N.kL, null != y && N.VW, n),
      "data-testid": "marketing-page-hero-header",
      children: (0, r.jsx)("div", {
        ref: M,
        children: (0, r.jsxs)("div", {
          className: N.hQ,
          children: [(0, r.jsx)(S.A, {
            containerVisibilityPercentage: U
          }), B && (null != y ? (0, r.jsx)(E.A, {
            expiresAt: y,
            className: N.IZ
          }) : (0, r.jsx)("div", {
            className: N.XN,
            children: (0, r.jsx)(T.A, {
              enablePremiumBrandRefresh: true
            })
          })), (0, r.jsx)("div", {
            className: N.s8,
            children: (0, r.jsx)(c.Heading, {
              variant: "display-md",
              color: "text-strong",
              className: N.wx,
              children: v.intl.string(v.t.YCZldK)
            })
          }), (0, r.jsxs)("div", {
            className: N.rf,
            children: [w && (0, r.jsx)("div", {
              className: N.eZ,
              children: (0, r.jsx)(C.A, {
                referrer: D,
                enablePremiumBrandRefresh: true
              })
            }), k && (0, r.jsx)("div", {
              className: N.Qn,
              children: (0, r.jsx)(x.A, {
                textColor: "text-strong",
                smallerText: false,
                isApplicationHome: true,
                enablePremiumBrandRefresh: true
              })
            }), (0, r.jsxs)("div", {
              className: B ? N.es : N.UJ,
              children: [(0, r.jsx)(b.A, {
                size: "md",
                fullWidth: B,
                hasActivePromotion: !!l,
                subscriptionTier: H ? j.pe.NONE : i,
                buttonTextOverride: H ? v.intl.string(v.t["2pG5Ga"]) : true
              }), !B && (0, r.jsx)(h.A, {
                variant: "secondary",
                size: "md"
              })]
            }), (0, r.jsx)("div", {
              className: N.iQ,
              children: (0, r.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: v.intl.format(v.t.kt9wxs, {
                  cheapestMonthlyPrice: R
                })
              })
            }), null != V && "marketingPageBanner" === V.properties.properties.oneofKind && (0, r.jsx)(f.x, {
              componentId: V.id,
              promotionBannerMarketingComponentFields: V.properties.properties.marketingPageBanner
            })]
          })]
        })
      })
    })
  })
}))