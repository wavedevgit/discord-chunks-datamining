/** Chunk was on 78528 **/
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
    tooltipConfig: f,
    shouldScalePreview: g = true,
    renderPreview: m,
    moreCount: b,
    isSingleCard: A = false,
    wishlistId: y,
    wishlistItem: _,
    cardSize: O = d.Y.MEDIUM
  } = e, {
    skuId: j,
    skuProductLine: v
  } = _, {
    trackUserProfileWishlistAction: x
  } = (0, u.NJ)(), E = g ? p.ho : p.C8, C = A ? p.pr : p.Nr, S = null != b && b > 0, I = (0, r.jsxs)(o.DUT, {
    onClick: () => {
      h(), x({
        action: S ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: S ? null : j,
        wishlistId: y,
        productLines: new Set([v])
      })
    },
    className: s()(C, {
      [p.ax]: O === d.Y.SMALL
    }),
    "aria-label": null != (n = f.title) ? n : "",
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
    asset: null == (i = f.renderIcon) ? true : i.call(f, _),
    assetSize: c.Q8,
    title: f.title,
    body: null != (l = f.body) ? l : "",
    children: I
  })
})