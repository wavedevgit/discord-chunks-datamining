/** Chunk was on 78528 **/
/** chunk id: 968975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: A,
    wishlistId: y,
    cardSize: _,
    title: O
  } = e, {
    analyticsLocations: j
  } = (0, s.Ay)(), {
    trackUserProfileWishlistAction: v
  } = (0, p.NJ)(), x = (0, l.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && v({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [v]), {
    cards: E,
    singleItem: C,
    productLines: S
  } = (0, l.useMemo)(() => {
    let e = [],
      r = null,
      l = new Set,
      i = [],
      s = false,
      p = false,
      h = false,
      f = false;
    for (let e = 0; e < t.length && i.length < 4; e++) {
      let n = t[e],
        r = n.item;
      r.isOwned || (i.push(n), (0, d.$)(r) && (0, a.bF)(r.sku) ? s = true : (0, u.L)(r) && (p = true), n.source === c.uS.WISHLIST ? h = true : n.source === c.uS.POPULAR && (f = true))
    }
    let m = s && p,
      b = h && f;
    for (let r = 0; r < i.length; r++) {
      let {
        item: s,
        source: a
      } = i[r], c = 3 === r && t.length > 4, p = b ? a : true;
      (0, u.L)(s) ? (l.add(s.skuProductLine), e.push((0, g.M)(s, {
        index: r,
        moreCount: c ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: j,
        onViewWishlist: A,
        wishlistId: y,
        showTypeTooltip: m,
        cardSize: _,
        itemSource: p
      }))) : (0, d.$)(s) && (l.add(s.skuProductLine), e.push((0, o.Z)(s, {
        index: r,
        moreCount: c ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: j,
        onViewWishlist: A,
        wishlistId: y,
        showTypeTooltip: m,
        cardSize: _,
        itemSource: p
      })))
    }
    return 1 === i.length && (r = i[0].item), {
      cards: e,
      singleItem: r,
      productLines: l
    }
  }, [t, n, j, A, y, _]), I = (0, h.A)({
    wishlistId: null != y ? y : null,
    onAction: x,
    productLines: S
  });
  if (0 === E.length) return null;
  let N = E;
  return null != C && ((0, u.L)(C) ? N = (0, g.z)(C, {
    profileOwner: n,
    analyticsLocations: j,
    wishlistId: y,
    onViewWishlist: A
  }) : (0, d.$)(C) && (N = (0, o.A)(C, {
    profileOwner: n,
    analyticsLocations: j,
    wishlistId: y,
    onViewWishlist: A
  }))), (0, r.jsxs)(f.A.Overlay, {
    ref: I,
    className: b.kL,
    children: [(0, r.jsx)("div", {
      className: b.wx,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: null != O ? O : m.intl.string(m.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: b.vY,
      children: N
    })]
  })
}