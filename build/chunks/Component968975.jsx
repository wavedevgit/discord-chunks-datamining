/** Chunk was on 78528 **/
/** chunk id: 968975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk3648 = require("./3648.jsx"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk535089 = require("./535089.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk173678 = require("./173678.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk250783 = require("./250783.js");

function b(e) {
  let {
    unownedWishlistItems: t = [],
    profileOwner: n,
    onClick: b,
    wishlistId: A,
    cardSize: y,
    title: _
  } = e, {
    analyticsLocations: O
  } = (0, s.Ay)(), {
    trackUserProfileWishlistAction: j
  } = (0, d.NJ)(), v = (0, l.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && j({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [j]), {
    cards: x,
    singleItem: E,
    productLines: C
  } = (0, l.useMemo)(() => {
    let e = [],
      r = null,
      l = new Set,
      i = [],
      s = false,
      d = false;
    for (let e = 0; e < t.length && i.length < 4; e++) {
      let n = t[e];
      i.push(n), (0, u.$)(n) && (0, a.bF)(n.sku) ? s = true : (0, c.L)(n) && (d = true)
    }
    let p = s && d;
    for (let r = 0; r < i.length; r++) {
      let s = i[r],
        a = 3 === r && t.length > 4;
      (0, c.L)(s) ? (l.add(s.skuProductLine), e.push((0, f.M)(s, {
        index: r,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: O,
        onViewWishlist: b,
        wishlistId: A,
        showTypeTooltip: p,
        cardSize: y
      }))) : (0, u.$)(s) && (l.add(s.skuProductLine), e.push((0, o.Z)(s, {
        index: r,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: O,
        onViewWishlist: b,
        wishlistId: A,
        showTypeTooltip: p,
        cardSize: y
      })))
    }
    return 1 === i.length && (r = i[0]), {
      cards: e,
      singleItem: r,
      productLines: l
    }
  }, [t, n, O, b, A, y]), S = (0, p.A)({
    wishlistId: null != A ? A : null,
    onAction: v,
    productLines: C
  });
  if (0 === x.length) return null;
  let I = x;
  return null != E && ((0, c.L)(E) ? I = (0, f.z)(E, {
    profileOwner: n,
    analyticsLocations: O,
    wishlistId: A,
    onViewWishlist: b
  }) : (0, u.$)(E) && (I = (0, o.A)(E, {
    profileOwner: n,
    analyticsLocations: O,
    wishlistId: A,
    onViewWishlist: b
  }))), (0, r.jsxs)(h.A.Overlay, {
    ref: S,
    className: m.kL,
    children: [(0, r.jsx)("div", {
      className: m.wx,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: null != _ ? _ : g.intl.string(g.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: m.vY,
      children: I
    })]
  })
}