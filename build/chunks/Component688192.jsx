/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => h,
  Z: () => I
});
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  h = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n.PROFILE_SIDEBAR = "profile_sidebar", n);

function I(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: l = "profile_modal",
    cardRef: h,
    renderItemPreview: I,
    accessibleLabel: O,
    onCardClick: g,
    buttonCTALabel: b,
    buttonIcon: P,
    isOwned: S = false,
    renderSourceIcon: j
  } = e, v = s.useRef(null), w = s.useRef(null), y = null != h ? h : w, {
    analyticsLocations: x
  } = (0, c.ZP)(), E = "profile_modal" === l && !S, T = (0, i.jsx)("div", {
    className: m.cardStateIconWrapper,
    children: (0, i.jsx)(o.sV5, {
      size: "custom",
      color: o.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(m.cardStateIcon, m.checkmark),
      "aria-label": p.intl.string(p.t.L5Pt9L)
    })
  }), N = (0, i.jsx)("div", {
    className: m.overlay,
    children: (0, i.jsx)(o.Button, {
      focusProps: {
        ringTarget: y
      },
      variant: "primary",
      size: "sm",
      text: b,
      icon: P,
      onClick: e => {
        e.stopPropagation(), L()
      },
      fullWidth: true
    })
  }), L = () => {
    S || (null != r && (0, u.Er)({
      wishlistId: r,
      action: f.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: x
    }), g())
  };
  return (0, i.jsxs)("div", {
    ref: v,
    className: m.container,
    children: [(0, i.jsxs)("div", {
      ref: y,
      className: a()(m.card, {
        [m.giftSent]: S,
        [m.smallCard]: "gifting_flow" === l,
        [m.largeCard]: "profile_modal" === l
      }),
      onClick: L,
      children: [(0, i.jsx)(o.nn4, {
        children: (0, i.jsx)(o.H, {
          children: O
        })
      }), (0, i.jsx)("div", {
        className: m.cardPreview,
        children: I()
      }), S && T, E ? N : (0, i.jsx)(o.P3F, {
        "aria-label": b,
        focusProps: {
          ringTarget: y
        },
        onClick: e => {
          e.stopPropagation(), L()
        }
      })]
    }), null != j && j(), n && null != r && (0, i.jsx)(d.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: m.removeItemButton
    })]
  })
}