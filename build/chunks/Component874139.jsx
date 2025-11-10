/** Chunk was on 14953 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk636466 = require("./636466.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk5337 = require("./5337.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815743 = require("./815743.js");

function f(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: f,
    wishlistId: g
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(), {
    cards: b,
    singleItem: _
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null;
    for (let i = 0; i < t.length && e.length < 4; i++) {
      let l = t[i],
        a = 3 === e.length && t.length > 4;
      l.isOwned || ((0, o.Q)(l) ? e.push((0, u.c)(l, {
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: m,
        onViewWishlist: f,
        wishlistId: g
      })) : (0, c.F)(l) && e.push((0, s.J)(l, {
        moreCount: a ? t.length - 4 + 1 : true,
        profileOwner: n,
        analyticsLocations: m,
        onViewWishlist: f,
        wishlistId: g
      })), 1 === e.length && null == r && (r = l))
    }
    return {
      cards: e,
      singleItem: r
    }
  }, [t, n, m, f, g]);
  if (0 === b.length) return null;
  let y = 1 === b.length && null != _,
    x = b;
  return y && ((0, o.Q)(_) ? x = (0, u.g)(_, {
    profileOwner: n,
    analyticsLocations: m,
    wishlistId: g
  }) : (0, c.F)(_) && (x = (0, s.B)(_, {
    profileOwner: n,
    analyticsLocations: m,
    wishlistId: g
  }))), (0, r.jsxs)(d.Z.Overlay, {
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.header,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: p.intl.string(p.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: h.cardsContainer,
      children: x
    })]
  })
}