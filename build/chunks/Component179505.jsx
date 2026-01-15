/** Chunk was on web.js **/
/** chunk id: 179505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => b,
  g: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk221300 = require("./221300.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk669155 = require("./669155.js"),
  Chunk788015 = require("./788015.js");

function g(e, t, n) {
  (0, c.Z)({
    skuId: e.skuId,
    isGift: true,
    giftingOrigin: p.Wt.USER_PROFILE_WISHLIST,
    analyticsLocations: n,
    giftRecipient: t,
    variantsReturnStyle: a.v.VARIANTS_GROUP
  })
}

function E(e) {
  switch (e.collectiblesItem.type) {
    case i.Z.AVATAR_DECORATION:
      return _.intl.string(_.t["7v0T9P"]);
    case i.Z.PROFILE_EFFECT:
      return _.intl.string(_.t.wR5wOo);
    case i.Z.NAMEPLATE:
      return _.intl.string(_.t.x5CoXR);
    default:
      return ""
  }
}

function b(e, t) {
  let {
    moreCount: n,
    profileOwner: a,
    analyticsLocations: o,
    onViewWishlist: c,
    isSingleCard: p = false,
    wishlistId: m,
    showTypeTooltip: E = false,
    cardSize: b,
    itemSource: y
  } = t, O = null != e.bundleItems && e.bundleItems.length > 0, v = null != n && n > 0, S = E && !v, I = v ? _.intl.string(_.t.TxBQzD) : _.intl.string(_.t.pLPjsb), T = y === u.lr.POPULAR ? _.intl.string(_.t.Ig6VDH) : _.intl.string(_.t.ilhtIa), C = {
    title: S ? _.intl.string(_.t.HFhcqh) : I,
    body: S ? T : true,
    renderIcon: S ? s.Qe : true,
    shouldShow: true
  }, A = () => {
    if (v) return void c();
    g(e, a, o)
  }, N = () => {
    if (O) {
      let t = {
        items: e.bundleItems
      };
      return (0, r.jsx)("div", {
        className: h.bundlePreview,
        children: (0, r.jsx)(l.d, {
          product: t,
          isHighlighted: false,
          user: a
        })
      })
    }
    return (0, r.jsx)(d.Z, {
      item: e,
      profileOwner: a,
      isHighlighted: false
    })
  }, P = !O && e.collectiblesItem.type === i.Z.PROFILE_EFFECT, w = O || !P;
  return (0, r.jsx)(f.Z, {
    onCardClick: A,
    tooltipConfig: C,
    shouldScalePreview: w,
    renderPreview: N,
    moreCount: n,
    isSingleCard: p,
    wishlistItem: e,
    wishlistId: m,
    cardSize: b,
    itemSource: y
  }, e.skuId)
}

function y(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: s
  } = t, l = null != e.bundleItems && e.bundleItems.length > 0, c = () => {
    g(e, n, i)
  }, u = b(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: s,
    isSingleCard: true,
    wishlistId: a,
    index: 0
  }), d = l ? _.intl.string(_.t.Zr5tjn) : E(e);
  return (0, r.jsxs)("div", {
    className: m.singleItemContainer,
    children: [u, (0, r.jsxs)("div", {
      className: m.singleItemInfo,
      children: [(0, r.jsx)(o.P3F, {
        onClick: c,
        className: m.singleItemName,
        "aria-label": _.intl.string(_.t.pLPjsb),
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