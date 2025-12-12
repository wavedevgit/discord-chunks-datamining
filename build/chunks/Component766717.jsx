/** Chunk was on web.js **/
/** chunk id: 766717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk120209 = require("./120209.js"),
  Chunk239990 = require("./239990.js");
let p = Chunk473749.forwardRef(function(e, t) {
  var n, i, o;
  let {
    onCardClick: p,
    tooltipConfig: _,
    shouldScalePreview: m = true,
    renderPreview: h,
    moreCount: g,
    isSingleCard: E = false,
    wishlistId: b,
    wishlistItem: y,
    cardSize: O = d.H.MEDIUM
  } = e, {
    skuId: v,
    skuProductLine: S
  } = y, {
    trackUserProfileWishlistAction: I
  } = (0, u.KZ)(), T = m ? f.cardPreview : f.cardPreviewNoScale, C = E ? f.cardSingle : f.card, A = null != g && g > 0, N = (0, r.jsxs)(l.P3F, {
    onClick: () => {
      p(), I({
        action: A ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: A ? null : v,
        wishlistId: b,
        productLines: new Set([S])
      })
    },
    className: a()(C, {
      [f.cardSmall]: O === d.H.SMALL
    }),
    "aria-label": null != (i = _.title) ? i : "",
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: T,
      children: h()
    }), A && (0, r.jsx)("div", {
      className: f.moreOverlay,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", g]
      })
    })]
  });
  return null != _.title && null == _.body && null == _.renderIcon ? (0, r.jsx)(s.u, {
    text: _.title,
    position: "top",
    children: N
  }) : (0, r.jsx)(s.i_, {
    asContainer: true,
    asset: null == (n = _.renderIcon) ? true : n.call(_, y),
    assetSize: c.EU,
    title: _.title,
    body: null != (o = _.body) ? o : "",
    children: N
  })
})