/** Chunk was on 44669 **/
/** chunk id: 957785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk594832 = require("./594832.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk524380 = require("./524380.js"),
  Chunk733557 = require("./733557.js");
let h = Chunk64700.forwardRef(function(e, t) {
  var n, l, i;
  let {
    onCardClick: h,
    tooltipConfig: g,
    shouldScalePreview: f = true,
    renderPreview: m,
    moreCount: b,
    isSingleCard: A = false,
    wishlistId: y,
    wishlistItem: O,
    cardSize: j = d.Y.MEDIUM
  } = e, {
    skuId: x,
    skuProductLine: _
  } = O, {
    trackUserProfileWishlistAction: v
  } = (0, u.NJ)(), E = f ? p.ho : p.C8, C = A ? p.pr : p.Nr, S = null != b && b > 0, I = (0, r.jsxs)(o.DUT, {
    onClick: () => {
      h(), v({
        action: S ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: S ? null : x,
        wishlistId: y,
        productLines: new Set([_])
      })
    },
    className: s()(C, {
      [p.ax]: j === d.Y.SMALL
    }),
    "aria-label": null != (n = g.title) ? n : "",
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: E,
      children: m()
    }), S && (0, r.jsx)("div", {
      className: p.sv,
      children: (0, r.jsxs)(o.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", b]
      })
    })]
  });
  return (0, r.jsx)(a.un, {
    asContainer: true,
    asset: null == (i = g.renderIcon) ? true : i.call(g, O),
    assetSize: c.Q8,
    title: g.title,
    body: null != (l = g.body) ? l : "",
    children: I
  })
})