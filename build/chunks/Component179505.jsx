/** Chunk was on web.js **/
/** chunk id: 179505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => E,
  g: () => b
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

function h(e, t, n) {
  (0, c.Z)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: f.Wt.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: a.v.VARIANTS_GROUP
  })
}

function g(e) {
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
}

function E(e, t) {
  let {
    moreCount: n,
    profileOwner: a,
    analyticsLocations: o,
    onViewWishlist: c,
    isSingleCard: f = false,
    wishlistId: m,
    showTypeTooltip: g = false,
    cardSize: E
  } = t, b = null != e.bundleItems && e.bundleItems.length > 0, y = null != n && n > 0, O = g && !y, v = y ? p.intl.string(p.t.TxBQzD) : p.intl.string(p.t.pLPjsb), S = {
    title: O ? p.intl.string(p.t.HFhcqh) : v,
    body: O ? p.intl.string(p.t.ilhtIa) : true,
    renderIcon: O ? s.Q : true,
    shouldShow: true
  }, I = () => {
    if (y) return void c();
    h(e, a, o)
  }, T = () => {
    if (b) {
      let t = {
        items: e.bundleItems
      };
      return (0, r.jsx)("div", {
        className: _.bundlePreview,
        children: (0, r.jsx)(l.d, {
          product: t,
          isPurchased: false,
          isHighlighted: false,
          user: a
        })
      })
    }
    return (0, r.jsx)(u.Z, {
      item: e,
      profileOwner: a,
      isHighlighted: false
    })
  }, C = !b && e.collectiblesItem.type === i.Z.PROFILE_EFFECT, A = b || !C;
  return (0, r.jsx)(d.Z, {
    onCardClick: I,
    tooltipConfig: S,
    shouldScalePreview: A,
    renderPreview: T,
    moreCount: n,
    isSingleCard: f,
    wishlistItem: e,
    wishlistId: m,
    cardSize: E
  }, e.skuId)
}

function b(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: s
  } = t, l = null != e.bundleItems && e.bundleItems.length > 0, c = () => {
    h(e, n, i)
  }, u = E(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: s,
    isSingleCard: true,
    wishlistId: a,
    index: 0
  }), d = l ? p.intl.string(p.t.Zr5tjn) : g(e);
  return (0, r.jsxs)("div", {
    className: m.singleItemContainer,
    children: [u, (0, r.jsxs)("div", {
      className: m.singleItemInfo,
      children: [(0, r.jsx)(o.P3F, {
        onClick: c,
        className: m.singleItemName,
        "aria-label": p.intl.string(p.t.pLPjsb),
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: e.skuName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: d
      })]
    })]
  })
}