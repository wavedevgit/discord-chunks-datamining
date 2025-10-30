/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => g,
  Z: () => v
});
var i, Chunk951288 = require("./951288.js"),
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
  g = ((i = {}).GIFTING_FLOW = "gifting_flow", i.PROFILE_MODAL = "profile_modal", i.PROFILE_SIDEBAR = "profile_sidebar", i);

function v(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: i,
    surface: s = "profile_modal",
    cardRef: g,
    renderItemPreview: v,
    accessibleLabel: P,
    onCardClick: b,
    buttonCTALabel: j,
    buttonIcon: S,
    isOwned: w = false,
    renderSourceIcon: x
  } = e, y = l.useRef(null), E = l.useRef(null), T = null != g ? g : E, {
    analyticsLocations: N
  } = (0, u.ZP)(), k = i && true === t.isOwned && null != t.gifterUserId, L = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null, _ = null != L ? f.ZP.getName(L) : null, C = k && null != L && null != _ && "" !== _, Z = C ? (0, n.jsx)(o.qEK, {
    src: L.getAvatarURL(true, 48),
    size: o.EFr.SIZE_48,
    "aria-label": _
  }) : null, R = (0, n.jsx)("div", {
    className: I.cardStateIconWrapper,
    children: (0, n.jsx)(o.sV5, {
      size: "custom",
      color: o.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(I.cardStateIcon, I.checkmark),
      "aria-label": O.intl.string(O.t.L5Pt9L)
    })
  }), F = (0, n.jsx)("div", {
    className: I.overlay,
    children: (0, n.jsx)(o.Button, {
      focusProps: {
        ringTarget: T
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
      analyticsLocations: N
    }), b()
  }, G = (0, n.jsxs)("div", {
    ref: y,
    className: I.container,
    children: [(0, n.jsxs)("div", {
      ref: T,
      className: a()(I.card, {
        [I.isOwned]: w,
        [I.smallCard]: "gifting_flow" === s,
        [I.largeCard]: "profile_modal" === s
      }),
      onClick: A,
      children: [(0, n.jsx)(o.nn4, {
        children: (0, n.jsx)(o.H, {
          children: P
        })
      }), (0, n.jsx)("div", {
        className: I.cardPreview,
        children: v()
      }), w && R, "profile_modal" === s ? F : (0, n.jsx)(o.P3F, {
        "aria-label": j,
        focusProps: {
          ringTarget: T
        },
        onClick: e => {
          e.stopPropagation(), A()
        }
      })]
    }), null != x && x(), i && null != r && (0, n.jsx)(h.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: I.removeItemButton
    })]
  });
  return C ? (0, n.jsx)(c.i_, {
    asContainer: true,
    title: O.intl.formatToPlainString(O.t.TL4ktE, {
      username: _
    }),
    body: t.skuName,
    asset: Z,
    children: G
  }) : G
}