/** Chunk was on web.js **/
/** chunk id: 766717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk120209 = require("./120209.js"),
  Chunk669155 = require("./669155.js");
let p = Chunk473749.forwardRef(function(e, t) {
  var n, i, a;
  let {
    onCardClick: p,
    tooltipConfig: _,
    shouldScalePreview: h = true,
    renderPreview: m,
    moreCount: g,
    isSingleCard: E = false,
    wishlistId: b,
    wishlistItem: y,
    cardSize: O = d.H.MEDIUM,
    itemSource: v
  } = e, {
    skuId: S,
    skuProductLine: I
  } = y, {
    trackUserProfileWishlistAction: T
  } = (0, u.KZ)(), C = h ? f.cardPreview : f.cardPreviewNoScale, A = E ? f.cardSingle : f.card, N = null != g && g > 0, P = (0, r.jsxs)(l.P3F, {
    onClick: () => {
      p(), T({
        action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: N ? null : S,
        wishlistId: b,
        productLines: new Set([I])
      })
    },
    className: o()(A, {
      [f.cardSmall]: O === d.H.SMALL
    }),
    "aria-label": null != (i = _.title) ? i : "",
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: C,
      children: m()
    }), N && (0, r.jsx)("div", {
      className: f.moreOverlay,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", g]
      })
    })]
  }), w = !N && null != v;
  return (0, r.jsxs)("div", {
    className: o()({
      [f.wrapperContainer]: w
    }),
    children: [w && (0, r.jsx)("div", {
      className: f.contextContainer,
      children: v === c.lr.POPULAR ? (0, r.jsx)(l.YqE, {
        className: o()(f.contextIcon, f.fireIcon),
        size: "xxs",
        color: "currentColor"
      }) : (0, r.jsx)(l.h_8, {
        className: o()(f.contextIcon, f.heartIcon),
        size: "xxs",
        color: "currentColor"
      })
    }), (0, r.jsx)(s.i_, {
      asContainer: true,
      asset: null == (n = _.renderIcon) ? true : n.call(_, y),
      assetSize: c.EU,
      title: _.title,
      body: null != (a = _.body) ? a : "",
      children: P
    })]
  })
})