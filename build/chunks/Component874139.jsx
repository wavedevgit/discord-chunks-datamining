/** Chunk was on 91053 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk636466 = require("./636466.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk221292 = require("./221292.js"),
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
  } = (0, a.ZP)(), O = (0, i.useCallback)(e => {
    let {
      wishlistId: t,
      action: n,
      skuId: r
    } = e;
    null != t && (0, u.Er)({
      wishlistId: t,
      action: n,
      skuId: r,
      analyticsLocations: y
    })
  }, [y]), j = (0, p.Z)({
    wishlistId: null != _ ? _ : null,
    onAction: O
  }), {
    cards: x,
    singleItem: v
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null,
      i = [],
      l = false,
      a = false;
    for (let e = 0; e < t.length && i.length < 4; e++) {
      let n = t[e];
      !n.isOwned && (i.push(n), (0, d.F)(n) && (0, s.K$)(n.sku) ? l = true : (0, c.Q)(n) && (a = true))
    }
    let u = l && a;
    for (let r = 0; r < i.length; r++) {
      let l = i[r],
        a = 3 === r && t.length > 4;
      (0, c.Q)(l) ? e.push((0, f.c)(l, {
        index: r,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: y,
        onViewWishlist: b,
        wishlistId: _,
        showTypeTooltip: u
      })): (0, d.F)(l) && e.push((0, o.J)(l, {
        index: r,
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: y,
        onViewWishlist: b,
        wishlistId: _,
        showTypeTooltip: u
      }))
    }
    return 1 === i.length && (r = i[0]), {
      cards: e,
      singleItem: r
    }
  }, [t, n, y, b, _]);
  if (0 === x.length) return null;
  let C = x;
  return null != v && ((0, c.Q)(v) ? C = (0, f.g)(v, {
    profileOwner: n,
    analyticsLocations: y,
    wishlistId: _,
    onViewWishlist: b
  }) : (0, d.F)(v) && (C = (0, o.B)(v, {
    profileOwner: n,
    analyticsLocations: y,
    wishlistId: _,
    onViewWishlist: b
  }))), (0, r.jsxs)(h.Z.Overlay, {
    ref: j,
    className: m.container,
    children: [(0, r.jsx)("div", {
      className: m.header,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: g.intl.string(g.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: m.cardsContainer,
      children: C
    })]
  })
}