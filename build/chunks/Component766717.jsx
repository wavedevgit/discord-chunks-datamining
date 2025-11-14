/** Chunk was on 91053 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607550 = require("./607550.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");
let d = Chunk647438.forwardRef(function(e, t) {
  let {
    onCardClick: n,
    tooltipText: i,
    shouldScalePreview: d = true,
    renderPreview: u,
    moreCount: p,
    isSingleCard: h = false,
    skuId: f,
    analyticsLocations: g,
    wishlistId: m
  } = e, b = d ? c.cardPreview : c.cardPreviewNoScale, _ = h ? c.cardSingle : c.card, y = null != p && p > 0;
  return (0, r.jsx)(l.u, {
    text: i,
    position: "top",
    children: (0, r.jsxs)(a.P3F, {
      onClick: () => {
        var e;
        n();
        let t = null != m ? s.Z.getWishlist(m) : null,
          r = null != (e = null == t ? true : t.hasThirdPartySku()) && e;
        (0, o.Er)({
          action: y ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
          analyticsLocations: g,
          skuId: y ? null : f,
          wishlistId: m,
          hasThirdPartySku: r
        })
      },
      className: _,
      "aria-label": i,
      innerRef: t,
      children: [(0, r.jsx)("div", {
        className: b,
        children: u()
      }), y && (0, r.jsx)("div", {
        className: c.moreOverlay,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          children: ["+", p]
        })
      })]
    })
  })
})