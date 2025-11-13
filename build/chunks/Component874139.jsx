/** Chunk was on 14953 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    cards: x,
    singleItem: j
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null;
    for (let i = 0; i < t.length && e.length < 4; i++) {
      let l = t[i],
        a = 3 === e.length && t.length > 4;
      if (l.isOwned) continue;
      let d = e.length;
      (0, o.Q)(l) ? e.push((0, h.c)(l, {
        index: d,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: _,
        onViewWishlist: m,
        wishlistId: b
      })): (0, c.F)(l) && e.push((0, s.J)(l, {
        index: d,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: _,
        onViewWishlist: m,
        wishlistId: b
      })), 1 === e.length && null == r && (r = l)
    }
    return {
      cards: e,
      singleItem: r
    }
  }, [t, n, _, m, b]);
  if (0 === x.length) return null;
  let v = 1 === x.length && null != j,
    C = x;
  return v && ((0, o.Q)(j) ? C = (0, h.g)(j, {
    profileOwner: n,
    analyticsLocations: _,
    wishlistId: b,
    onViewWishlist: m
  }) : (0, c.F)(j) && (C = (0, s.B)(j, {
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