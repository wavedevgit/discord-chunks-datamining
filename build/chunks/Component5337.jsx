/** Chunk was on 91053 **/
/** chunk id: 5337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => b,
  g: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk221300 = require("./221300.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239990 = require("./239990.js"),
  Chunk976218 = require("./976218.js");

function m(e, t, n) {
  (0, c.Z)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: p.Wt.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: l.v.VARIANTS_GROUP
  })
}

function b(e, t) {
  let {
    moreCount: n,
    profileOwner: l,
    analyticsLocations: a,
    onViewWishlist: c,
    isSingleCard: p = false,
    wishlistId: g,
    showTypeTooltip: b = false
  } = t, _ = null != e.bundleItems && e.bundleItems.length > 0, y = null != n && n > 0, O = b && !y, x = y ? h.intl.string(h.t.TxBQzD) : h.intl.string(h.t.pLPjsb), j = {
    title: O ? h.intl.string(h.t.HFhcqh) : x,
    body: O ? h.intl.string(h.t.ilhtIa) : true,
    renderIcon: O ? s.Q : true,
    shouldShow: true
  }, v = !_ && e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
  return (0, r.jsx)(u.Z, {
    onCardClick: () => {
      if (y) return void c();
      m(e, l, a)
    },
    tooltipConfig: j,
    shouldScalePreview: _ || !v,
    renderPreview: () => {
      if (_) {
        let t = {
          items: e.bundleItems
        };
        return (0, r.jsx)("div", {
          className: f.bundlePreview,
          children: (0, r.jsx)(o.d, {
            product: t,
            isPurchased: false,
            isHighlighted: false,
            user: l
          })
        })
      }
      return (0, r.jsx)(d.Z, {
        item: e,
        profileOwner: l,
        isHighlighted: false
      })
    },
    moreCount: n,
    isSingleCard: p,
    wishlistItem: e,
    wishlistId: g
  }, e.skuId)
}

function _(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: l,
    wishlistId: s,
    onViewWishlist: o
  } = t, c = null != e.bundleItems && e.bundleItems.length > 0, d = b(e, {
    profileOwner: n,
    analyticsLocations: l,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: s,
    index: 0
  }), u = c ? h.intl.string(h.t.Zr5tjn) : function(e) {
    switch (e.collectiblesItem.type) {
      case i.Z.AVATAR_DECORATION:
        return h.intl.string(h.t["7v0T9P"]);
      case i.Z.PROFILE_EFFECT:
        return h.intl.string(h.t.wR5wOo);
      case i.Z.NAMEPLATE:
        return h.intl.string(h.t.x5CoXR);
      default:
        return ""
    }
  }(e);
  return (0, r.jsxs)("div", {
    className: g.singleItemContainer,
    children: [d, (0, r.jsxs)("div", {
      className: g.singleItemInfo,
      children: [(0, r.jsx)(a.P3F, {
        onClick: () => {
          m(e, n, l)
        },
        className: g.singleItemName,
        "aria-label": h.intl.string(h.t.pLPjsb),
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: e.skuName
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: u
      })]
    })]
  })
}