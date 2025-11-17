/** Chunk was on 91053 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk636466 = require("./636466.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk221292 = require("./221292.js"),
  Chunk471341 = require("./471341.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk5337 = require("./5337.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815743 = require("./815743.js");

function m(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: m,
    wishlistId: b
  } = e, {
    analyticsLocations: _
  } = (0, a.ZP)(), y = (0, i.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      skuId: r
    } = e;
    null != t && (0, d.Er)({
      wishlistId: t,
      action: n,
      skuId: r,
      analyticsLocations: _
    })
  }, [_]), O = (0, u.Z)({
    wishlistId: null != b ? b : null,
    onAction: y
  }), {
    cards: j,
    singleItem: x
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null;
    for (let i = 0; i < t.length && e.length < 4; i++) {
      let l = t[i],
        a = 3 === e.length && t.length > 4,
        d = e.length;
      if ((0, o.Q)(l)) {
        if (l.isOwned) continue;
        e.push((0, h.c)(l, {
          index: d,
          moreCount: a ? t.length - 4 + 1 : true,
          profileOwner: n,
          analyticsLocations: _,
          onViewWishlist: m,
          wishlistId: b
        }))
      } else(0, c.F)(l) && e.push((0, s.J)(l, {
        index: d,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: _,
        onViewWishlist: m,
        wishlistId: b
      }));
      1 === e.length && null == r && (r = l)
    }
    return {
      cards: e,
      singleItem: r
    }
  }, [t, n, _, m, b]);
  if (0 === j.length) return null;
  let v = 1 === j.length && null != x,
    C = j;
  return v && ((0, o.Q)(x) ? C = (0, h.g)(x, {
    profileOwner: n,
    analyticsLocations: _,
    wishlistId: b,
    onViewWishlist: m
  }) : (0, c.F)(x) && (C = (0, s.B)(x, {
    profileOwner: n,
    analyticsLocations: _,
    wishlistId: b,
    onViewWishlist: m
  }))), (0, r.jsxs)(p.Z.Overlay, {
    ref: O,
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.header,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: f.intl.string(f.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: g.cardsContainer,
      children: C
    })]
  })
}