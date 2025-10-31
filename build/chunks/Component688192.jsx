/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => b,
  Z: () => I
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
  b = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n.PROFILE_SIDEBAR = "profile_sidebar", n);

function I(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: s = "profile_modal",
    cardRef: b,
    renderItemPreview: I,
    accessibleLabel: j,
    onCardClick: P,
    buttonCTALabel: v,
    buttonIcon: w,
    isOwned: y = false,
    renderSourceIcon: S
  } = e, x = l.useRef(null), k = l.useRef(null), E = null != b ? b : k, {
    analyticsLocations: N
  } = (0, u.ZP)(), C = n && true === t.isOwned && null != t.gifterUserId, T = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null, L = null != T ? f.ZP.getName(T) : null, Z = C && null != T && null != L && "" !== L, _ = Z ? (0, i.jsx)(c.qEK, {
    src: T.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": L
  }) : null, R = (0, i.jsx)("div", {
    className: h.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(h.cardStateIcon, h.checkmark),
      "aria-label": g.intl.string(g.t.L5Pt9L)
    })
  }), F = (0, i.jsx)("div", {
    className: h.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: E
      },
      variant: "primary",
      size: "sm",
      text: v,
      icon: w,
      onClick: e => {
        e.stopPropagation(), A()
      },
      fullWidth: true
    })
  }), A = () => {
    null != r && (0, m.Er)({
      wishlistId: r,
      action: O.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: N
    }), P()
  }, G = (0, i.jsxs)("div", {
    ref: x,
    className: h.container,
    children: [(0, i.jsxs)("div", {
      ref: E,
      className: a()(h.card, {
        [h.isOwned]: y,
        [h.smallCard]: "gifting_flow" === s,
        [h.largeCard]: "profile_modal" === s
      }),
      onClick: A,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: j
        })
      }), (0, i.jsx)("div", {
        className: h.cardPreview,
        children: I()
      }), y && R, "profile_modal" === s ? F : (0, i.jsx)(c.P3F, {
        "aria-label": v,
        focusProps: {
          ringTarget: E
        },
        onClick: e => {
          e.stopPropagation(), A()
        }
      })]
    }), null != S && S(), n && null != r && (0, i.jsx)(p.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: h.removeItemButton
    })]
  });
  return Z ? (0, i.jsx)(o.i_, {
    asContainer: true,
    title: g.intl.formatToPlainString(g.t.TL4ktE, {
      username: L
    }),
    body: t.skuName,
    asset: _,
    children: G
  }) : G
}