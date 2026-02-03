/** Chunk was on 44669 **/
/** chunk id: 968975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk3648 = require("./3648.jsx"),
  Chunk178213 = require("./178213.js"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk35092 = require("./35092.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk535089 = require("./535089.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk173678 = require("./173678.jsx");
require("./524380.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk250783 = require("./250783.js");

function y(e) {
  let {
    unownedWishlistItems: t = [],
    profileOwner: n,
    onClick: y,
    wishlistId: O,
    cardSize: j,
    title: x
  } = e, {
    analyticsLocations: _
  } = (0, s.Ay)(), {
    trackUserProfileWishlistAction: v
  } = (0, h.NJ)(), E = (0, c.G)("user_profile_sidebar_wishlist_breadcrumb"), C = (0, l.useCallback)(e => {
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
    visibleItems: S,
    showTypeTooltip: I
  } = (0, l.useMemo)(() => {
    let e = [],
      n = false,
      r = false;
    for (let l = 0; l < t.length && e.length < 4; l++) {
      let i = t[l];
      e.push(i), (0, d.$)(i) && (0, a.bF)(i.sku) ? n = true : (0, u.L)(i) && (r = true)
    }
    return {
      visibleItems: e,
      showTypeTooltip: n && r
    }
  }, [t]), {
    cards: N,
    singleItem: T,
    productLines: P
  } = (0, l.useMemo)(() => {
    let e = [],
      r = null,
      l = new Set;
    for (let r = 0; r < S.length; r++) {
      let i = S[r],
        s = 3 === r && t.length > 4;
      (0, u.L)(i) ? (l.add(i.skuProductLine), e.push((0, m.M)(i, {
        index: r,
        moreCount: s ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: _,
        onViewWishlist: y,
        wishlistId: O,
        showTypeTooltip: I,
        cardSize: j
      }))) : (0, d.$)(i) && (l.add(i.skuProductLine), e.push((0, o.Z)(i, {
        index: r,
        moreCount: s ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: _,
        onViewWishlist: y,
        wishlistId: O,
        showTypeTooltip: I,
        cardSize: j
      })))
    }
    return 1 === S.length && (r = S[0]), {
      cards: e,
      singleItem: r,
      productLines: l
    }
  }, [t, n, _, y, O, j, S, I]), w = (0, g.A)({
    wishlistId: null != O ? O : null,
    onAction: C,
    productLines: P
  }), R = (0, l.useMemo)(() => E ? S.map((e, l) => null == e.sku ? null : (0, r.jsx)(p.Ay, {
    sku: e.sku,
    index: l,
    totalUnownedWishlistItems: t.length,
    wishlistOwner: n,
    wishlistId: O,
    analyticsLocations: _,
    onViewWishlist: y,
    showTypeTooltip: I
  }, e.skuId)) : null, [_, E, y, n, I, t.length, S, O]);
  if (0 === N.length) return null;
  let D = N;
  return null != T && ((0, u.L)(T) ? D = (0, m.z)(T, {
    profileOwner: n,
    analyticsLocations: _,
    wishlistId: O,
    onViewWishlist: y
  }) : (0, d.$)(T) && (D = (0, o.A)(T, {
    profileOwner: n,
    analyticsLocations: _,
    wishlistId: O,
    onViewWishlist: y
  }))), (0, r.jsxs)(f.A.Overlay, {
    ref: w,
    className: A.kL,
    children: [(0, r.jsx)("div", {
      className: A.wx,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: null != x ? x : b.intl.string(b.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: A.vY,
      children: E ? R : D
    })]
  })
}