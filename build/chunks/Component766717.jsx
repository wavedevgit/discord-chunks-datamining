/** Chunk was on 91053 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");
let c = Chunk473749.forwardRef(function(e, t) {
  let {
    onCardClick: n,
    tooltipTitle: i,
    tooltipBody: c,
    shouldScalePreview: d = true,
    renderPreview: u,
    moreCount: p,
    isSingleCard: h = false,
    skuId: f,
    analyticsLocations: g,
    wishlistId: m,
    productLine: b
  } = e, _ = d ? o.cardPreview : o.cardPreviewNoScale, y = h ? o.cardSingle : o.card, O = null != p && p > 0, j = (0, r.jsxs)(a.P3F, {
    onClick: () => {
      n(), (0, s.Er)({
        action: O ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        analyticsLocations: g,
        skuId: O ? null : f,
        wishlistId: m,
        productLines: new Set([b])
      })
    },
    className: y,
    "aria-label": c,
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: _,
      children: u()
    }), O && (0, r.jsx)("div", {
      className: o.moreOverlay,
      children: (0, r.jsxs)(a.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", p]
      })
    })]
  });
  return null != i ? (0, r.jsx)(l.i_, {
    asContainer: true,
    title: i,
    body: c,
    children: j
  }) : (0, r.jsx)(l.u, {
    text: c,
    position: "top",
    children: j
  })
})