/** Chunk was on 80566 **/
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
  h = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n);

function I(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: s = "profile_modal",
    cardRef: h,
    renderItemPreview: I,
    accessibleLabel: O,
    onCardClick: g,
    buttonCTALabel: b,
    buttonIcon: P,
    isOwned: j = false,
    renderSourceIcon: v
  } = e, S = l.useRef(null), w = l.useRef(null), x = null != h ? h : w, {
    analyticsLocations: y
  } = (0, o.ZP)(), E = "profile_modal" === s && !j, N = (0, i.jsx)("div", {
    className: p.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(p.cardStateIcon, p.checkmark),
      "aria-label": m.intl.string(m.t.L5Pt9L)
    })
  }), T = (0, i.jsx)("div", {
    className: p.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: x
      },
      variant: "primary",
      size: "sm",
      text: b,
      icon: P,
      onClick: e => {
        e.stopPropagation(), k()
      },
      fullWidth: true
    })
  }), k = () => {
    j || (null != r && (0, u.Er)({
      wishlistId: r,
      action: f.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: y
    }), g())
  };
  return (0, i.jsxs)("div", {
    ref: S,
    className: p.container,
    children: [(0, i.jsxs)("div", {
      ref: x,
      className: a()(p.card, {
        [p.giftSent]: j,
        [p.smallCard]: "gifting_flow" === s,
        [p.largeCard]: "profile_modal" === s
      }),
      onClick: k,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: O
        })
      }), (0, i.jsx)("div", {
        className: p.cardPreview,
        children: I()
      }), j && N, E ? T : (0, i.jsx)(c.P3F, {
        "aria-label": b,
        focusProps: {
          ringTarget: x
        },
        onClick: e => {
          e.stopPropagation(), k()
        }
      })]
    }), null != v && v(), n && null != r && (0, i.jsx)(d.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: p.removeItemButton
    })]
  })
}