/** Chunk was on web.js **/
/** chunk id: 874139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk636466 = require("./636466.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk471341 = require("./471341.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk179505 = require("./179505.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282082 = require("./282082.js");
let g = 4;

function E(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: E,
    wishlistId: b,
    cardSize: y,
    title: O = m.intl.string(m.t["7lZ31J"])
  } = e, {
    analyticsLocations: v
  } = (0, o.ZP)(), {
    trackUserProfileWishlistAction: S
  } = (0, d.KZ)(), I = (0, i.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && S({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [S]), {
    cards: T,
    singleItem: C,
    productLines: A
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null,
      i = new Set,
      a = [],
      o = false,
      d = false;
    for (let e = 0; e < t.length && a.length < g; e++) {
      let n = t[e];
      !n.isOwned && (a.push(n), (0, u.F)(n) && (0, s.K$)(n.sku) ? o = true : (0, c.Q)(n) && (d = true))
    }
    let f = o && d;
    for (let r = 0; r < a.length; r++) {
      let o = a[r],
        s = r === g - 1 && t.length > g;
      (0, c.Q)(o) ? (i.add(o.skuProductLine), e.push((0, _.c)(o, {
        index: r,
        moreCount: s ? t.length - g + 1 : true,
        profileOwner: n,
        analyticsLocations: v,
        onViewWishlist: E,
        wishlistId: b,
        showTypeTooltip: f,
        cardSize: y
      }))) : (0, u.F)(o) && (i.add(o.skuProductLine), e.push((0, l.J)(o, {
        index: r,
        moreCount: s ? t.length - g + 1 : true,
        profileOwner: n,
        analyticsLocations: v,
        onViewWishlist: E,
        wishlistId: b,
        showTypeTooltip: f,
        cardSize: y
      })))
    }
    return 1 === a.length && (r = a[0]), {
      cards: e,
      singleItem: r,
      productLines: i
    }
  }, [t, n, v, E, b, y]), N = (0, f.Z)({
    wishlistId: null != b ? b : null,
    onAction: I,
    productLines: A
  });
  if (0 === T.length) return null;
  let P = T;
  return null != C && ((0, c.Q)(C) ? P = (0, _.g)(C, {
    profileOwner: n,
    analyticsLocations: v,
    wishlistId: b,
    onViewWishlist: E
  }) : (0, u.F)(C) && (P = (0, l.B)(C, {
    profileOwner: n,
    analyticsLocations: v,
    wishlistId: b,
    onViewWishlist: E
  }))), (0, r.jsxs)(p.Z.Overlay, {
    ref: N,
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.header,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: O
      })
    }), (0, r.jsx)("div", {
      className: h.cardsContainer,
      children: P
    })]
  })
}