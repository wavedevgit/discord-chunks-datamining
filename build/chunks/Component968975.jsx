/** Chunk was on web.js **/
/** chunk id: 968975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk3648 = require("./3648.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk535089 = require("./535089.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk173678 = require("./173678.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk250783 = require("./250783.js");
let E = 4;

function y(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: y,
    wishlistId: b,
    cardSize: O,
    title: v
  } = e, {
    analyticsLocations: A
  } = (0, s.Ay)(), {
    trackUserProfileWishlistAction: I
  } = (0, f.NJ)(), S = (0, i.useCallback)(e => {
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
    cards: T,
    singleItem: C,
    productLines: N
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null,
      i = new Set,
      a = [],
      s = false,
      f = false,
      p = false,
      _ = false;
    for (let e = 0; e < t.length && a.length < E; e++) {
      let n = t[e],
        r = n.item;
      r.isOwned || (a.push(n), (0, d.$)(r) && (0, o.bF)(r.sku) ? s = true : (0, u.L)(r) && (f = true), n.source === c.uS.WISHLIST ? p = true : n.source === c.uS.POPULAR && (_ = true))
    }
    let m = s && f,
      g = p && _;
    for (let r = 0; r < a.length; r++) {
      let {
        item: s,
        source: o
      } = a[r], c = r === E - 1 && t.length > E, f = g ? o : true;
      (0, u.L)(s) ? (i.add(s.skuProductLine), e.push((0, h.M)(s, {
        index: r,
        moreCount: c ? t.length - E + 1 : true,
        profileOwner: n,
        analyticsLocations: A,
        onViewWishlist: y,
        wishlistId: b,
        showTypeTooltip: m,
        cardSize: O,
        itemSource: f
      }))) : (0, d.$)(s) && (i.add(s.skuProductLine), e.push((0, l.Z)(s, {
        index: r,
        moreCount: c ? t.length - E + 1 : true,
        profileOwner: n,
        analyticsLocations: A,
        onViewWishlist: y,
        wishlistId: b,
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
  }, [t, n, A, y, b, O]), R = (0, p.A)({
    wishlistId: null != b ? b : null,
    onAction: S,
    productLines: N
  });
  if (0 === T.length) return null;
  let w = T;
  return null != C && ((0, u.L)(C) ? w = (0, h.z)(C, {
    profileOwner: n,
    analyticsLocations: A,
    wishlistId: b,
    onViewWishlist: y
  }) : (0, d.$)(C) && (w = (0, l.A)(C, {
    profileOwner: n,
    analyticsLocations: A,
    wishlistId: b,
    onViewWishlist: y
  }))), (0, r.jsxs)(_.A.Overlay, {
    ref: R,
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g.wx,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: null != v ? v : m.intl.string(m.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: g.vY,
      children: w
    })]
  })
}