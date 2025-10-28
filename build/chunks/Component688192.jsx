/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => g,
  Z: () => b
});
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk221292 = require("./221292.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  g = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n.PROFILE_SIDEBAR = "profile_sidebar", n);

function b(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: s = "profile_modal",
    cardRef: g,
    renderItemPreview: b,
    accessibleLabel: P,
    onCardClick: j,
    buttonCTALabel: v,
    buttonIcon: S,
    isOwned: w = false,
    renderSourceIcon: y
  } = e, E = l.useRef(null), x = l.useRef(null), T = null != g ? g : x, {
    analyticsLocations: N
  } = (0, u.ZP)(), L = n && true === t.isOwned && null != t.gifterUserId, k = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null, _ = null != k ? f.ZP.getName(k) : null, Z = L && null != k && null != _ && "" !== _, C = Z ? (0, i.jsx)(c.qEK, {
    src: k.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": _
  }) : null, R = (0, i.jsx)("div", {
    className: O.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(O.cardStateIcon, O.checkmark),
      "aria-label": I.intl.string(I.t.L5Pt9L)
    })
  }), F = (0, i.jsx)("div", {
    className: O.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: T
      },
      variant: "primary",
      size: "sm",
      text: v,
      icon: S,
      onClick: e => {
        e.stopPropagation(), A()
      },
      fullWidth: true
    })
  }), A = () => {
    null != r && (0, m.Er)({
      wishlistId: r,
      action: h.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: N
    }), j()
  }, G = (0, i.jsxs)("div", {
    ref: E,
    className: O.container,
    children: [(0, i.jsxs)("div", {
      ref: T,
      className: a()(O.card, {
        [O.isOwned]: w,
        [O.smallCard]: "gifting_flow" === s,
        [O.largeCard]: "profile_modal" === s
      }),
      onClick: A,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: P
        })
      }), (0, i.jsx)("div", {
        className: O.cardPreview,
        children: b()
      }), w && R, "profile_modal" === s ? F : (0, i.jsx)(c.P3F, {
        "aria-label": v,
        focusProps: {
          ringTarget: T
        },
        onClick: e => {
          e.stopPropagation(), A()
        }
      })]
    }), null != y && y(), n && null != r && (0, i.jsx)(p.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: O.removeItemButton
    })]
  });
  return Z ? (0, i.jsx)(o.i_, {
    asContainer: true,
    title: I.intl.formatToPlainString(I.t.TL4ktE, {
      username: _
    }),
    body: t.skuName,
    asset: C,
    children: G
  }) : G
}