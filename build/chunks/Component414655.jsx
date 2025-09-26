/** Chunk was on 74477 **/
/** chunk id: 414655, original params: e,t,r (module,exports,require) **/
"use strict";
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
  Chunk621853 = require("./621853.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function b(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: r
  } = (0, l.cj)([f.Z], () => ({
    defaultWishlistId: f.Z.getFirstWishlistId(t.id)
  })), {
    analyticsLocations: b
  } = (0, c.ZP)(), {
    wishlist: v,
    error: y
  } = (0, d.k)(r), j = i.useCallback(() => {
    (0, a.pT)(), (0, u.mK)({
      analyticsLocations: b,
      analyticsSource: o.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [b]);
  return null != y ? null : null == v || 0 === v.items.length ? (0, n.jsx)(g.F, {
    fade: true,
    children: (0, n.jsxs)("div", {
      className: m.emptyStateContainer,
      children: [(0, n.jsxs)("div", {
        className: m.emptyStateText,
        children: [(0, n.jsx)(s.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: p.intl.string(p.t.HGnLLS)
        }), (0, n.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p.intl.string(p.t["/X1ny8"])
        })]
      }), (0, n.jsx)(s.zxk, {
        variant: "primary",
        icon: s.EOn,
        text: p.intl.string(p.t.ZbS4QE),
        onClick: j
      })]
    })
  }) : (0, n.jsxs)(g.F, {
    fade: true,
    children: [(0, n.jsxs)("div", {
      className: m.headerRow,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: p.intl.format(p.t.r6Y1Li, {
          count: v.items.length
        })
      }), (0, n.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.qJs,
        text: p.intl.string(p.t.SDUwMz),
        onClick: j
      })]
    }), (0, n.jsx)(h.Z, {
      items: v.items,
      profileOwner: t
    })]
  })
}