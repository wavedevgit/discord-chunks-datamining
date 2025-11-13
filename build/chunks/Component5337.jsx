/** Chunk was on 14953 **/
/** chunk id: 5337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => g,
  g: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk221300 = require("./221300.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk976218 = require("./976218.js");

function f(e, t, n) {
  (0, s.Z)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: u.Wt.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: l.v.VARIANTS_GROUP
  })
}

function g(e, t) {
  let {
    moreCount: n,
    profileOwner: l,
    analyticsLocations: a,
    onViewWishlist: s,
    isSingleCard: u = false,
    wishlistId: h
  } = t, g = null != n && n > 0, m = g ? p.intl.string(p.t.TxBQzD) : p.intl.string(p.t.ilhtIa), b = e.collectiblesItem.type === i.Z.PROFILE_EFFECT;
  return (0, r.jsx)(d.Z, {
    onCardClick: () => {
      if (g) return void s();
      f(e, l, a)
    },
    tooltipText: m,
    shouldScalePreview: !b,
    renderPreview: () => (0, r.jsx)(o.Z, {
      item: e,
      profileOwner: l,
      isHighlighted: false,
      surface: c.Y.PROFILE_SIDEBAR
    }),
    moreCount: n,
    isSingleCard: u,
    skuId: e.skuId,
    analyticsLocations: a,
    wishlistId: h
  }, e.skuId)
}

function m(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: l,
    wishlistId: s,
    onViewWishlist: o
  } = t, c = g(e, {
    profileOwner: n,
    analyticsLocations: l,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: s,
    index: 0
  });
  return (0, r.jsxs)("div", {
    className: h.singleItemContainer,
    children: [c, (0, r.jsxs)("div", {
      className: h.singleItemInfo,
      children: [(0, r.jsx)(a.P3F, {
        onClick: () => {
          f(e, n, l)
        },
        className: h.singleItemName,
        "aria-label": p.intl.string(p.t.ilhtIa),
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: e.skuName
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: function(e) {
          switch (e.collectiblesItem.type) {
            case i.Z.AVATAR_DECORATION:
              return p.intl.string(p.t["7v0T9P"]);
            case i.Z.PROFILE_EFFECT:
              return p.intl.string(p.t.wR5wOo);
            case i.Z.NAMEPLATE:
              return p.intl.string(p.t.x5CoXR);
            default:
              return ""
          }
        }(e)
      })]
    })]
  })
}