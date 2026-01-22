/** Chunk was on web.js **/
/** chunk id: 957785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
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
let p = Chunk64700.forwardRef(function(e, t) {
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
    cardSize: O = d.Y.MEDIUM,
    itemSource: A
  } = e, {
    skuId: v,
    skuProductLine: S
  } = y, {
    trackUserProfileWishlistAction: I
  } = (0, u.NJ)(), T = h ? f.ho : f.C8, C = E ? f.pr : f.Nr, N = null != g && g > 0, R = (0, r.jsxs)(l.DUT, {
    onClick: () => {
      p(), I({
        action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
        skuId: N ? null : v,
        wishlistId: b,
        productLines: new Set([S])
      })
    },
    className: s()(C, {
      [f.ax]: O === d.Y.SMALL
    }),
    "aria-label": null != (n = _.title) ? n : "",
    innerRef: t,
    children: [(0, r.jsx)("div", {
      className: T,
      children: m()
    }), N && (0, r.jsx)("div", {
      className: f.sv,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: ["+", g]
      })
    })]
  }), w = !N && null != A;
  return (0, r.jsxs)("div", {
    className: s()({
      [f.r4]: w
    }),
    children: [w && (0, r.jsx)("div", {
      className: f.RL,
      children: A === c.uS.POPULAR ? (0, r.jsx)(l.Y3C, {
        className: s()(f.fd, f.I$),
        size: "xxs",
        color: "currentColor"
      }) : (0, r.jsx)(l.C3E, {
        className: s()(f.fd, f.O1),
        size: "xxs",
        color: "currentColor"
      })
    }), (0, r.jsx)(o.un, {
      asContainer: true,
      asset: null == (a = _.renderIcon) ? true : a.call(_, y),
      assetSize: c.Q8,
      title: _.title,
      body: null != (i = _.body) ? i : "",
      children: R
    })]
  })
})