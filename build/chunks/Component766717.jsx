/** Chunk was on 14953 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");
let c = Chunk647438.forwardRef(function(e, t) {
  let {
    onCardClick: n,
    tooltipText: i,
    shouldScalePreview: c = true,
    renderPreview: d,
    moreCount: u,
    isSingleCard: p = false,
    skuId: h,
    analyticsLocations: f,
    wishlistId: g
  } = e, m = c ? o.cardPreview : o.cardPreviewNoScale, b = p ? o.cardSingle : o.card, _ = null != u && u > 0;
  return (0, r.jsx)(l.u, {
    text: i,
    position: "top",
    children: (0, r.jsxs)(a.P3F, {
      onClick: () => {
        n(), (0, s.Er)({
          action: _ ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
          analyticsLocations: f,
          skuId: _ ? null : h,
          wishlistId: g
        })
      },
      className: b,
      "aria-label": i,
      innerRef: t,
      children: [(0, r.jsx)("div", {
        className: m,
        children: d()
      }), _ && (0, r.jsx)("div", {
        className: o.moreOverlay,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          children: ["+", u]
        })
      })]
    })
  })
})