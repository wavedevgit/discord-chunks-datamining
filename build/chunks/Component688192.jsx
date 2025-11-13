/** Chunk was on 96413 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => x,
  Z: () => y
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk607550 = require("./607550.js"),
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
  x = ((i = {}).GIFTING_FLOW = "gifting_flow", i.PROFILE_MODAL = "profile_modal", i.PROFILE_SIDEBAR = "profile_sidebar", i);

function y(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: i,
    surface: l = "profile_modal",
    cardRef: x,
    renderItemPreview: y,
    accessibleLabel: w,
    onCardClick: E,
    buttonCTALabel: S,
    buttonIcon: _,
    isOwned: N = false,
    renderSourceIcon: Z,
    giftingOrigin: k,
    source: F
  } = e, L = a.useRef(null), T = a.useRef(null), C = null != x ? x : T, {
    analyticsLocations: A
  } = (0, u.ZP)(), M = i && true === t.isOwned && null != t.gifterUserId, D = null != t.gifterUserId ? h.default.getUser(t.gifterUserId) : null, R = null != D ? m.ZP.getName(D) : null, W = M && null != D && null != R && "" !== R, z = W ? (0, s.jsx)(c.qEK, {
    src: D.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": R
  }) : null, H = (0, s.jsx)("div", {
    className: I.cardStateIconWrapper,
    children: (0, s.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(I.cardStateIcon, I.checkmark),
      "aria-label": P.intl.string(P.t.L5Pt9L)
    })
  }), U = (0, s.jsx)("div", {
    className: I.overlay,
    children: (0, s.jsx)(c.Button, {
      focusProps: {
        ringTarget: C
      },
      variant: "primary",
      size: "sm",
      text: S,
      icon: _,
      onClick: e => {
        e.stopPropagation(), B()
      },
      fullWidth: true
    })
  }), B = () => {
    if (k === O.Wt.DM_CHANNEL_WISHLIST) {
      let e = F === f.lr.WISHLIST ? "wishlist" : "shop";
      p.default.track(b.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: F === f.lr.WISHLIST ? r : null
      })
    } else if (null != r) {
      var e;
      let i = d.Z.getWishlist(r),
        s = null != (e = null == i ? true : i.hasThirdPartySku()) && e;
      (0, v.Er)({
        wishlistId: r,
        action: j.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: A,
        hasThirdPartySku: s
      })
    }
    E()
  }, G = (0, s.jsxs)("div", {
    ref: L,
    className: I.container,
    children: [(0, s.jsxs)("div", {
      ref: C,
      className: n()(I.card, {
        [I.isOwned]: N,
        [I.smallCard]: "gifting_flow" === l,
        [I.largeCard]: "profile_modal" === l
      }),
      onClick: B,
      children: [(0, s.jsx)(c.nn4, {
        children: (0, s.jsx)(c.H, {
          children: w
        })
      }), (0, s.jsx)("div", {
        className: I.cardPreview,
        children: y()
      }), N && H, "profile_modal" === l ? U : (0, s.jsx)(c.P3F, {
        "aria-label": S,
        focusProps: {
          ringTarget: C
        },
        onClick: e => {
          e.stopPropagation(), B()
        }
      })]
    }), null != Z && Z(), i && null != r && (0, s.jsx)(g.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: I.removeItemButton
    })]
  });
  return W ? (0, s.jsx)(o.i_, {
    asContainer: true,
    title: P.intl.formatToPlainString(P.t.TL4ktE, {
      username: R
    }),
    body: t.skuName,
    asset: z,
    children: G
  }) : G
}