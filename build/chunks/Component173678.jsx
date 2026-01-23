/** Chunk was on web.js **/
/** chunk id: 173678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => y,
  z: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk353157 = require("./353157.jsx"),
  Chunk957785 = require("./957785.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk733557 = require("./733557.js"),
  Chunk101616 = require("./101616.js");

function g(e, t, n) {
  (0, c.A)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: p.vQ.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: a.g.VARIANTS_GROUP
  })
}

function E(e) {
  switch (e.collectiblesItem.type) {
    case i.R.AVATAR_DECORATION:
      return _.intl.string(_.t["7v0T9P"]);
    case i.R.PROFILE_EFFECT:
      return _.intl.string(_.t.wR5wOo);
    case i.R.NAMEPLATE:
      return _.intl.string(_.t.x5CoXR);
    default:
      return ""
  }
}

function y(e, t) {
  let {
    moreCount: n,
    profileOwner: a,
    analyticsLocations: s,
    onViewWishlist: c,
    isSingleCard: p = false,
    wishlistId: m,
    showTypeTooltip: E = false,
    cardSize: y,
    itemSource: b
  } = t, O = null != e.bundleItems && e.bundleItems.length > 0, v = null != n && n > 0, A = E && !v, I = v ? _.intl.string(_.t.TxBQzD) : _.intl.string(_.t.pLPjsb), S = b === u.uS.POPULAR ? _.intl.string(_.t.Ig6VDH) : _.intl.string(_.t.ilhtIa), T = {
    title: A ? _.intl.string(_.t.HFhcqh) : I,
    body: A ? S : true,
    renderIcon: A ? o.GM : true,
    shouldShow: true
  }, C = () => {
    v ? c() : g(e, a, s)
  }, N = () => {
    if (O) {
      let t = {
        items: e.bundleItems
      };
      return (0, r.jsx)("div", {
        className: h.hT,
        children: (0, r.jsx)(l.X, {
          product: t,
          isHighlighted: false,
          user: a
        })
      })
    }
    return (0, r.jsx)(d.A, {
      item: e,
      profileOwner: a,
      isHighlighted: false
    })
  }, R = !O && e.collectiblesItem.type === i.R.PROFILE_EFFECT, w = O || !R;
  return (0, r.jsx)(f.A, {
    onCardClick: C,
    tooltipConfig: T,
    shouldScalePreview: w,
    renderPreview: N,
    moreCount: n,
    isSingleCard: p,
    wishlistItem: e,
    wishlistId: m,
    cardSize: y,
    itemSource: b
  }, e.skuId)
}

function b(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: o
  } = t, l = null != e.bundleItems && e.bundleItems.length > 0, c = () => {
    g(e, n, i)
  }, u = y(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: a,
    index: 0
  }), d = l ? _.intl.string(_.t.Zr5tjn) : E(e);
  return (0, r.jsxs)("div", {
    className: m.D5,
    children: [u, (0, r.jsxs)("div", {
      className: m.S7,
      children: [(0, r.jsx)(s.DUT, {
        onClick: c,
        className: m.Hh,
        "aria-label": _.intl.string(_.t.pLPjsb),
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: e.skuName
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: d
      })]
    })]
  })
}