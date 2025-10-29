/** Chunk was on 91053 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk5337 = require("./5337.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815743 = require("./815743.js");

function h(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: h
  } = e, {
    analyticsLocations: p
  } = (0, a.ZP)(), {
    cards: f,
    singleCollectibleItem: g
  } = (0, i.useMemo)(() => {
    let e = [],
      r = null;
    for (let i = 0; i < t.length && e.length < 4; i++) {
      let l = t[i],
        a = 3 === e.length && t.length > 4;
      !l.isOwned && (0, s.Q)(l) && (0 === e.length && (r = l), e.push((0, c.c)(l, {
        moreCount: a ? t.length - 4 : true,
        profileOwner: n,
        analyticsLocations: p,
        onViewWishlist: h
      })))
    }
    return {
      cards: e,
      singleCollectibleItem: 1 === e.length ? r : null
    }
  }, [t, n, p, h]);
  if (0 === f.length) return null;
  let m = 1 === f.length && null != g ? (0, c.g)(g, {
    profileOwner: n,
    analyticsLocations: p
  }) : f;
  return (0, r.jsxs)(o.Z.Overlay, {
    className: u.container,
    children: [(0, r.jsx)("div", {
      className: u.header,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: d.intl.string(d.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: u.cardsContainer,
      children: m
    })]
  })
}