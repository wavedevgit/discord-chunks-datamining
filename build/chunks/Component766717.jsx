/** Chunk was on 14953 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");

function o(e) {
  let {
    onCardClick: t,
    tooltipText: n,
    shouldScalePreview: o = true,
    renderPreview: c,
    moreCount: d,
    isSingleCard: u = false,
    skuId: p,
    analyticsLocations: h,
    wishlistId: f
  } = e, g = o ? s.cardPreview : s.cardPreviewNoScale, m = u ? s.cardSingle : s.card, b = null != d && d > 0;
  return (0, r.jsx)(i.u, {
    text: n,
    position: "top",
    children: (0, r.jsxs)(l.P3F, {
      onClick: () => {
        t(), (0, a.Er)({
          action: b ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
          analyticsLocations: h,
          skuId: b ? null : p,
          wishlistId: f
        })
      },
      className: m,
      "aria-label": n,
      children: [(0, r.jsx)("div", {
        className: g,
        children: c()
      }), b && (0, r.jsx)("div", {
        className: s.moreOverlay,
        children: (0, r.jsxs)(l.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          children: ["+", d]
        })
      })]
    })
  })
}