/** Chunk was on 96413 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => I,
  Z: () => x
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk221292 = require("./221292.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  I = ((i = {}).GIFTING_FLOW = "gifting_flow", i.PROFILE_MODAL = "profile_modal", i.PROFILE_SIDEBAR = "profile_sidebar", i);

function x(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: i,
    surface: l = "profile_modal",
    cardRef: I,
    renderItemPreview: x,
    accessibleLabel: y,
    onCardClick: w,
    buttonCTALabel: E,
    buttonIcon: S,
    isOwned: _ = false,
    renderSourceIcon: N,
    giftingOrigin: Z,
    source: k
  } = e, F = a.useRef(null), L = a.useRef(null), C = null != I ? I : L, {
    analyticsLocations: T
  } = (0, d.ZP)(), A = i && true === t.isOwned && null != t.gifterUserId, M = null != t.gifterUserId ? f.default.getUser(t.gifterUserId) : null, D = null != M ? h.ZP.getName(M) : null, R = A && null != M && null != D && "" !== D, W = R ? (0, s.jsx)(c.qEK, {
    src: M.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": D
  }) : null, z = (0, s.jsx)("div", {
    className: P.cardStateIconWrapper,
    children: (0, s.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(P.cardStateIcon, P.checkmark),
      "aria-label": O.intl.string(O.t.L5Pt9L)
    })
  }), H = (0, s.jsx)("div", {
    className: P.overlay,
    children: (0, s.jsx)(c.Button, {
      focusProps: {
        ringTarget: C
      },
      variant: "primary",
      size: "sm",
      text: E,
      icon: S,
      onClick: e => {
        e.stopPropagation(), U()
      },
      fullWidth: true
    })
  }), U = () => {
    if (Z === b.Wt.DM_CHANNEL_WISHLIST) {
      let e = k === u.lr.WISHLIST ? "wishlist" : "shop";
      p.default.track(j.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: k === u.lr.WISHLIST ? r : null
      })
    } else null != r && (0, m.Er)({
      wishlistId: r,
      action: g.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: T
    });
    w()
  }, B = (0, s.jsxs)("div", {
    ref: F,
    className: P.container,
    children: [(0, s.jsxs)("div", {
      ref: C,
      className: n()(P.card, {
        [P.isOwned]: _,
        [P.smallCard]: "gifting_flow" === l,
        [P.largeCard]: "profile_modal" === l
      }),
      onClick: U,
      children: [(0, s.jsx)(c.nn4, {
        children: (0, s.jsx)(c.H, {
          children: y
        })
      }), (0, s.jsx)("div", {
        className: P.cardPreview,
        children: x()
      }), _ && z, "profile_modal" === l ? H : (0, s.jsx)(c.P3F, {
        "aria-label": E,
        focusProps: {
          ringTarget: C
        },
        onClick: e => {
          e.stopPropagation(), U()
        }
      })]
    }), null != N && N(), i && null != r && (0, s.jsx)(v.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: P.removeItemButton
    })]
  });
  return R ? (0, s.jsx)(o.i_, {
    asContainer: true,
    title: O.intl.formatToPlainString(O.t.TL4ktE, {
      username: D
    }),
    body: t.skuName,
    asset: W,
    children: B
  }) : B
}