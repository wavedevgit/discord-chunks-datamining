/** Chunk was on 91053 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607550 = require("./607550.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");
let d = Chunk473749.forwardRef(function(e, t) {
  let {
    onCardClick: n,
    tooltipTitle: i,
    tooltipBody: d,
    shouldScalePreview: u = true,
    renderPreview: p,
    moreCount: h,
    isSingleCard: f = false,
    skuId: g,
    analyticsLocations: m,
    wishlistId: b
  } = e, _ = u ? c.cardPreview : c.cardPreviewNoScale, y = f ? c.cardSingle : c.card, O = null != h && h > 0, j = (0, r.jsxs)(a.P3F, {
    onClick: () => {
      var e;
      n();
      let t = null != b ? s.Z.getWishlist(b) : null,
        r = null != (e = null == t ? true : t.hasThirdPartySku()) && e;
      (0, o.Er)({
        action: O ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        analyticsLocations: m,
        skuId: O ? null : g,
        wishlistId: b,
        hasThirdPartySku: r
      })
    },
    className: y,
    "aria-label": d,
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: _,
      children: p()
    }), O && (0, r.jsx)("div", {
      className: c.moreOverlay,
      children: (0, r.jsxs)(a.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", h]
      })
    })]
  });
  return null != i ? (0, r.jsx)(l.i_, {
    asContainer: true,
    title: i,
    body: d,
    children: j
  }) : (0, r.jsx)(l.u, {
    text: d,
    position: "top",
    children: j
  })
})