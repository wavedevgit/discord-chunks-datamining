/** Chunk was on web.js **/
/** chunk id: 874139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk636466 = require("./636466.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk471341 = require("./471341.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk179505 = require("./179505.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282082 = require("./282082.js");
let E = 4;

function b(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: b,
    wishlistId: y,
    cardSize: O,
    title: v
  } = e, {
    analyticsLocations: S
  } = (0, o.ZP)(), {
    trackUserProfileWishlistAction: I
  } = (0, f.KZ)(), T = (0, i.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && I({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [I]), {
    cards: C,
    singleItem: A,
    productLines: N
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null,
      i = new Set,
      a = [],
      o = false,
      f = false,
      p = false,
      _ = false;
    for (let e = 0; e < t.length && a.length < E; e++) {
      let n = t[e],
        r = n.item;
      r.isOwned || (a.push(n), (0, d.F)(r) && (0, s.K$)(r.sku) ? o = true : (0, u.Q)(r) && (f = true), n.source === c.lr.WISHLIST ? p = true : n.source === c.lr.POPULAR && (_ = true))
    }
    let m = o && f,
      g = p && _;
    for (let r = 0; r < a.length; r++) {
      let {
        item: o,
        source: s
      } = a[r], c = r === E - 1 && t.length > E, f = g ? s : true;
      (0, u.Q)(o) ? (i.add(o.skuProductLine), e.push((0, h.c)(o, {
        index: r,
        moreCount: c ? t.length - E + 1 : true,
        profileOwner: n,
        analyticsLocations: S,
        onViewWishlist: b,
        wishlistId: y,
        showTypeTooltip: m,
        cardSize: O,
        itemSource: f
      }))) : (0, d.F)(o) && (i.add(o.skuProductLine), e.push((0, l.J)(o, {
        index: r,
        moreCount: c ? t.length - E + 1 : true,
        profileOwner: n,
        analyticsLocations: S,
        onViewWishlist: b,
        wishlistId: y,
        showTypeTooltip: m,
        cardSize: O,
        itemSource: f
      })))
    }
    return 1 === a.length && (r = a[0].item), {
      cards: e,
      singleItem: r,
      productLines: i
    }
  }, [t, n, S, b, y, O]), P = (0, p.Z)({
    wishlistId: null != y ? y : null,
    onAction: T,
    productLines: N
  });
  if (0 === C.length) return null;
  let w = C;
  return null != A && ((0, u.Q)(A) ? w = (0, h.g)(A, {
    profileOwner: n,
    analyticsLocations: S,
    wishlistId: y,
    onViewWishlist: b
  }) : (0, d.F)(A) && (w = (0, l.B)(A, {
    profileOwner: n,
    analyticsLocations: S,
    wishlistId: y,
    onViewWishlist: b
  }))), (0, r.jsxs)(_.Z.Overlay, {
    ref: P,
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.header,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: null != v ? v : m.intl.string(m.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: g.cardsContainer,
      children: w
    })]
  })
}