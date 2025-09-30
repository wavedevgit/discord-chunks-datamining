/** Chunk was on 49902 **/
/** chunk id: 414655, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function b(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: r,
    currentUser: b
  } = (0, l.cj)([g.Z, f.default], () => ({
    defaultWishlistId: g.Z.getFirstWishlistId(t.id),
    currentUser: f.default.getCurrentUser()
  })), {
    analyticsLocations: y
  } = (0, c.ZP)(), O = (null == b ? true : b.id) === t.id, {
    wishlist: j,
    error: x
  } = (0, d.k)(r), P = i.useCallback(() => {
    (0, a.pT)(), (0, u.mK)({
      analyticsLocations: y,
      analyticsSource: o.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [y]);
  return null != x ? null : null == j || 0 === j.items.length ? (0, n.jsx)(h.F, {
    fade: true,
    children: (0, n.jsxs)("div", {
      className: v.emptyStateContainer,
      children: [(0, n.jsxs)("div", {
        className: v.emptyStateText,
        children: [(0, n.jsx)(s.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: m.intl.string(m.t.HGnLLS)
        }), (0, n.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: m.intl.string(m.t["/X1ny8"])
        })]
      }), O && (0, n.jsx)(s.zxk, {
        variant: "primary",
        icon: s.EOn,
        text: m.intl.string(m.t.ZbS4QE),
        onClick: P
      })]
    })
  }) : (0, n.jsxs)(h.F, {
    fade: true,
    children: [(0, n.jsxs)("div", {
      className: v.headerRow,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: m.intl.format(m.t.r6Y1Li, {
          count: j.items.length
        })
      }), O ? (0, n.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.qJs,
        text: m.intl.string(m.t.SDUwMz),
        onClick: P
      }) : (0, n.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.EOn,
        text: m.intl.string(m.t["i/yzHh"]),
        onClick: P
      })]
    }), (0, n.jsx)(p.Z, {
      items: j.items,
      profileOwner: t,
      isOwner: O
    })]
  })
}