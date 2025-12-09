/** Chunk was on 91053 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk5337 = require("./5337.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815743 = require("./815743.js");

function b(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: b,
    wishlistId: _
  } = e, {
    analyticsLocations: y
  } = (0, a.ZP)(), {
    trackUserProfileWishlistAction: O
  } = (0, u.KZ)(), x = (0, i.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && O({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [O]), {
    cards: j,
    singleItem: v,
    productLines: C
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null,
      i = new Set,
      l = [],
      a = false,
      u = false;
    for (let e = 0; e < t.length && l.length < 4; e++) {
      let n = t[e];
      !n.isOwned && (l.push(n), (0, d.F)(n) && (0, s.K$)(n.sku) ? a = true : (0, c.Q)(n) && (u = true))
    }
    let p = a && u;
    for (let r = 0; r < l.length; r++) {
      let a = l[r],
        s = 3 === r && t.length > 4;
      (0, c.Q)(a) ? (i.add(a.skuProductLine), e.push((0, f.c)(a, {
        index: r,
        moreCount: s ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: y,
        onViewWishlist: b,
        wishlistId: _,
        showTypeTooltip: p
      }))) : (0, d.F)(a) && (i.add(a.skuProductLine), e.push((0, o.J)(a, {
        index: r,
        moreCount: s ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: y,
        onViewWishlist: b,
        wishlistId: _,
        showTypeTooltip: p
      })))
    }
    return 1 === l.length && (r = l[0]), {
      cards: e,
      singleItem: r,
      productLines: i
    }
  }, [t, n, y, b, _]), I = (0, p.Z)({
    wishlistId: null != _ ? _ : null,
    onAction: x,
    productLines: C
  });
  if (0 === j.length) return null;
  let S = j;
  return null != v && ((0, c.Q)(v) ? S = (0, f.g)(v, {
    profileOwner: n,
    analyticsLocations: y,
    wishlistId: _,
    onViewWishlist: b
  }) : (0, d.F)(v) && (S = (0, o.B)(v, {
    profileOwner: n,
    analyticsLocations: y,
    wishlistId: _,
    onViewWishlist: b
  }))), (0, r.jsxs)(h.Z.Overlay, {
    ref: I,
    className: m.container,
    children: [(0, r.jsx)("div", {
      className: m.header,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: g.intl.string(g.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: m.cardsContainer,
      children: S
    })]
  })
}