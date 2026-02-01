/** Chunk was on 42402 **/
/** chunk id: 173678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => b,
  z: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk353157 = require("./353157.jsx"),
  Chunk957785 = require("./957785.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk733557 = require("./733557.js"),
  Chunk101616 = require("./101616.js");

function m(e, t, n) {
  (0, c.A)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: p.vQ.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: i.g.VARIANTS_GROUP
  })
}

function b(e, t) {
  let {
    moreCount: n,
    profileOwner: i,
    analyticsLocations: s,
    onViewWishlist: c,
    isSingleCard: p = false,
    wishlistId: f,
    showTypeTooltip: b = false,
    cardSize: A
  } = t, y = null != e.bundleItems && e.bundleItems.length > 0, O = null != n && n > 0, j = b && !O, x = O ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb), _ = {
    title: j ? h.intl.string(h.t.HFhcqh) : x,
    body: j ? h.intl.string(h.t.ilhtIa) : true,
    renderIcon: j ? a.GM : true,
    shouldShow: true
  }, v = !y && e.collectiblesItem.type === l.R.PROFILE_EFFECT;
  return (0, r.jsx)(d.A, {
    onCardClick: () => {
      O ? c() : m(e, i, s)
    },
    tooltipConfig: _,
    shouldScalePreview: y || !v,
    renderPreview: () => {
      if (y) {
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
      return (0, r.jsx)(u.A, {
        item: e,
        profileOwner: i,
        isHighlighted: false
      })
    },
    moreCount: n,
    isSingleCard: p,
    wishlistItem: e,
    wishlistId: f,
    cardSize: A
  }, e.skuId)
}

function A(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: o
  } = t, c = null != e.bundleItems && e.bundleItems.length > 0, u = b(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: a,
    index: 0
  }), d = c ? h.intl.string(h.t.Zr5tjn) : function(e) {
    switch (e.collectiblesItem.type) {
      case l.R.AVATAR_DECORATION:
        return h.intl.string(h.t["7v0T9P"]);
      case l.R.PROFILE_EFFECT:
        return h.intl.string(h.t.wR5wOo);
      case l.R.NAMEPLATE:
        return h.intl.string(h.t.x5CoXR);
      default:
        return ""
    }
  }(e);
  return (0, r.jsxs)("div", {
    className: f.D5,
    children: [u, (0, r.jsxs)("div", {
      className: f.S7,
      children: [(0, r.jsx)(s.DUT, {
        onClick: () => {
          m(e, n, i)
        },
        className: f.Hh,
        "aria-label": h.intl.string(h.t.pLPjsb),
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