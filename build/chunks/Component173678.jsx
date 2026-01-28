/** Chunk was on 78528 **/
/** chunk id: 173678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => A,
  z: () => y
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

function b(e, t, n) {
  (0, c.A)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: h.vQ.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: i.g.VARIANTS_GROUP
  })
}

function A(e, t) {
  let {
    moreCount: n,
    profileOwner: i,
    analyticsLocations: s,
    onViewWishlist: c,
    isSingleCard: h = false,
    wishlistId: m,
    showTypeTooltip: A = false,
    cardSize: y,
    itemSource: _
  } = t, O = null != e.bundleItems && e.bundleItems.length > 0, j = null != n && n > 0, v = A && !j, x = j ? f.intl.string(f.t.TxBQzD) : f.intl.string(f.t.pLPjsb), E = _ === u.uS.POPULAR ? f.intl.string(f.t.Ig6VDH) : f.intl.string(f.t.ilhtIa), C = {
    title: v ? f.intl.string(f.t.HFhcqh) : x,
    body: v ? E : true,
    renderIcon: v ? a.GM : true,
    shouldShow: true
  }, S = !O && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
  return (0, r.jsx)(p.A, {
    onCardClick: () => {
      j ? c() : b(e, i, s)
    },
    tooltipConfig: C,
    shouldScalePreview: O || !S,
    renderPreview: () => {
      if (O) {
        let t = {
          items: e.bundleItems
        };
        return (0, r.jsx)("div", {
          className: g.hT,
          children: (0, r.jsx)(o.X, {
            product: t,
            isHighlighted: false,
            user: i
          })
        })
      }
      return (0, r.jsx)(d.A, {
        item: e,
        profileOwner: i,
        isHighlighted: false
      })
    },
    moreCount: n,
    isSingleCard: h,
    wishlistItem: e,
    wishlistId: m,
    cardSize: y,
    itemSource: _
  }, e.skuId)
}

function y(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: o
  } = t, c = null != e.bundleItems && e.bundleItems.length > 0, u = A(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: a,
    index: 0
  }), d = c ? f.intl.string(f.t.Zr5tjn) : function(e) {
    switch (e.collectiblesItem.type) {
      case l.R.AVATAR_DECORATION:
        return f.intl.string(f.t["7v0T9P"]);
      case l.R.PROFILE_EFFECT:
        return f.intl.string(f.t.wR5wOo);
      case l.R.NAMEPLATE:
        return f.intl.string(f.t.x5CoXR);
      default:
        return ""
    }
  }(e);
  return (0, r.jsxs)("div", {
    className: m.D5,
    children: [u, (0, r.jsxs)("div", {
      className: m.S7,
      children: [(0, r.jsx)(s.DUT, {
        onClick: () => {
          b(e, n, i)
        },
        className: m.Hh,
        "aria-label": f.intl.string(f.t.pLPjsb),
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