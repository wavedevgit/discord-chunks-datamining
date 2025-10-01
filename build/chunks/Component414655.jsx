/** Chunk was on 49902 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
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
  Chunk363725 = require("./363725.js");

function b(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: n,
    currentUser: b
  } = (0, l.cj)([g.Z, f.default], () => ({
    defaultWishlistId: g.Z.getFirstWishlistId(t.id),
    currentUser: f.default.getCurrentUser()
  })), {
    analyticsLocations: y
  } = (0, c.ZP)(), j = (null == b ? true : b.id) === t.id, {
    wishlist: O,
    error: x
  } = (0, d.k)(n), P = i.useCallback(() => {
    (0, a.pT)(), (0, u.mK)({
      analyticsLocations: y,
      analyticsSource: o.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [y]);
  return null != x ? null : null == O || 0 === O.items.length ? (0, r.jsx)(h.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: v.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: v.emptyStateText,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: m.intl.string(m.t.HGnLLS)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: m.intl.string(m.t["/X1ny8"])
        })]
      }), j && (0, r.jsx)(s.zxk, {
        variant: "primary",
        icon: s.EOn,
        text: m.intl.string(m.t.ZbS4QE),
        onClick: P
      })]
    })
  }) : (0, r.jsxs)(h.F, {
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: v.headerRow,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: m.intl.format(m.t.r6Y1Li, {
          count: O.items.length
        })
      }), j ? (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.qJs,
        text: m.intl.string(m.t.SDUwMz),
        onClick: P
      }) : (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.EOn,
        text: m.intl.string(m.t["i/yzHh"]),
        onClick: P
      })]
    }), (0, r.jsx)(p.Z, {
      items: O.items,
      profileOwner: t,
      isOwner: j
    })]
  })
}