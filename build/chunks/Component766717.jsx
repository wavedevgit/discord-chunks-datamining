/** Chunk was on 89522 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk239990 = require("./239990.js");
let d = Chunk473749.forwardRef(function(e, t) {
  var n, i, d;
  let {
    onCardClick: u,
    tooltipConfig: p,
    shouldScalePreview: h = true,
    renderPreview: f,
    moreCount: g,
    isSingleCard: m = false,
    wishlistId: b,
    wishlistItem: _
  } = e, {
    skuId: y,
    skuProductLine: O
  } = _, {
    trackUserProfileWishlistAction: x
  } = (0, o.KZ)(), j = h ? c.cardPreview : c.cardPreviewNoScale, v = m ? c.cardSingle : c.card, C = null != g && g > 0, I = (0, r.jsxs)(a.P3F, {
    onClick: () => {
      u(), x({
        action: C ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: C ? null : y,
        wishlistId: b,
        productLines: new Set([O])
      })
    },
    className: v,
    "aria-label": null != (i = p.title) ? i : "",
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: j,
      children: f()
    }), C && (0, r.jsx)("div", {
      className: c.moreOverlay,
      children: (0, r.jsxs)(a.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", g]
      })
    })]
  });
  return null != p.title && null == p.body && null == p.renderIcon ? (0, r.jsx)(l.u, {
    text: p.title,
    position: "top",
    children: I
  }) : (0, r.jsx)(l.i_, {
    asContainer: true,
    asset: null == (n = p.renderIcon) ? true : n.call(p, _),
    assetSize: s.EU,
    title: p.title,
    body: null != (d = p.body) ? d : "",
    children: I
  })
})