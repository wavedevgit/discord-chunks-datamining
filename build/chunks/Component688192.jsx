/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => g,
  Z: () => P
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

function P(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: l = "profile_modal",
    cardRef: g,
    renderItemPreview: P,
    accessibleLabel: v,
    onCardClick: b,
    buttonCTALabel: j,
    buttonIcon: S,
    isOwned: w = false,
    renderSourceIcon: x
  } = e, y = s.useRef(null), E = s.useRef(null), N = null != g ? g : E, {
    analyticsLocations: T
  } = (0, u.ZP)(), k = n && true === t.isOwned && null != t.gifterUserId, _ = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null, L = null != _ ? f.ZP.getName(_) : null, C = k && null != _ && null != L && "" !== L, Z = C ? (0, i.jsx)(o.qEK, {
    src: _.getAvatarURL(true, 48),
    size: o.EFr.SIZE_48,
    "aria-label": L
  }) : null, R = (0, i.jsx)("div", {
    className: O.cardStateIconWrapper,
    children: (0, i.jsx)(o.sV5, {
      size: "custom",
      color: o.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(O.cardStateIcon, O.checkmark),
      "aria-label": I.intl.string(I.t.L5Pt9L)
    })
  }), F = (0, i.jsx)("div", {
    className: O.overlay,
    children: (0, i.jsx)(o.Button, {
      focusProps: {
        ringTarget: N
      },
      variant: "primary",
      size: "sm",
      text: j,
      icon: S,
      onClick: e => {
        e.stopPropagation(), A()
      },
      fullWidth: true
    })
  }), A = () => {
    null != r && (0, m.Er)({
      wishlistId: r,
      action: p.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: T
    }), b()
  }, G = (0, i.jsxs)("div", {
    ref: y,
    className: O.container,
    children: [(0, i.jsxs)("div", {
      ref: N,
      className: a()(O.card, {
        [O.isOwned]: w,
        [O.smallCard]: "gifting_flow" === l,
        [O.largeCard]: "profile_modal" === l
      }),
      onClick: A,
      children: [(0, i.jsx)(o.nn4, {
        children: (0, i.jsx)(o.H, {
          children: v
        })
      }), (0, i.jsx)("div", {
        className: O.cardPreview,
        children: P()
      }), w && R, "profile_modal" === l ? F : (0, i.jsx)(o.P3F, {
        "aria-label": j,
        focusProps: {
          ringTarget: N
        },
        onClick: e => {
          e.stopPropagation(), A()
        }
      })]
    }), null != x && x(), n && null != r && (0, i.jsx)(h.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: O.removeItemButton
    })]
  });
  return C ? (0, i.jsx)(c.i_, {
    asContainer: true,
    title: I.intl.formatToPlainString(I.t.TL4ktE, {
      username: L
    }),
    body: t.skuName,
    asset: Z,
    children: G
  }) : G
}