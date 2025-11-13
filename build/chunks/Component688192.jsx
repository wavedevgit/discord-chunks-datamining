/** Chunk was on 93582 **/
/** chunk id: 688192, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Y: () => C,
  Z: () => b
});
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  C = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n.PROFILE_SIDEBAR = "profile_sidebar", n);

function b(e) {
  let {
    item: i,
    wishlistId: t,
    isOwner: n,
    surface: a = "profile_modal",
    cardRef: C,
    renderItemPreview: b,
    accessibleLabel: P,
    onCardClick: N,
    buttonCTALabel: S,
    buttonIcon: k,
    isOwned: T = false,
    renderSourceIcon: L,
    giftingOrigin: O,
    source: B
  } = e, E = s.useRef(null), R = s.useRef(null), H = null != C ? C : R, {
    analyticsLocations: y
  } = (0, d.ZP)(), G = n && true === i.isOwned && null != i.gifterUserId, M = null != i.gifterUserId ? h.default.getUser(i.gifterUserId) : null, W = null != M ? f.ZP.getName(M) : null, F = G && null != M && null != W && "" !== W, Z = F ? (0, r.jsx)(c.qEK, {
    src: M.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": W
  }) : null, A = (0, r.jsx)("div", {
    className: v.cardStateIconWrapper,
    children: (0, r.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: l()(v.cardStateIcon, v.checkmark),
      "aria-label": j.intl.string(j.t.L5Pt9L)
    })
  }), D = (0, r.jsx)("div", {
    className: v.overlay,
    children: (0, r.jsx)(c.Button, {
      focusProps: {
        ringTarget: H
      },
      variant: "primary",
      size: "sm",
      text: S,
      icon: k,
      onClick: e => {
        e.stopPropagation(), z()
      },
      fullWidth: true
    })
  }), z = () => {
    if (O === x.Wt.DM_CHANNEL_WISHLIST) {
      let e = B === m.lr.WISHLIST ? "wishlist" : "shop";
      _.default.track(w.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: i.skuId,
        item_source: e,
        wishlist_id: B === m.lr.WISHLIST ? t : null
      })
    } else if (null != t) {
      var e;
      let n = u.Z.getWishlist(t),
        r = null != (e = null == n ? true : n.hasThirdPartySku()) && e;
      (0, p.Er)({
        wishlistId: t,
        action: g.NW.WISHLIST_ITEM_CLICKED,
        skuId: i.skuId,
        analyticsLocations: y,
        hasThirdPartySku: r
      })
    }
    N()
  }, Y = (0, r.jsxs)("div", {
    ref: E,
    className: v.container,
    children: [(0, r.jsxs)("div", {
      ref: H,
      className: l()(v.card, {
        [v.isOwned]: T,
        [v.smallCard]: "gifting_flow" === a,
        [v.largeCard]: "profile_modal" === a
      }),
      onClick: z,
      children: [(0, r.jsx)(c.nn4, {
        children: (0, r.jsx)(c.H, {
          children: P
        })
      }), (0, r.jsx)("div", {
        className: v.cardPreview,
        children: b()
      }), T && A, "profile_modal" === a ? D : (0, r.jsx)(c.P3F, {
        "aria-label": S,
        focusProps: {
          ringTarget: H
        },
        onClick: e => {
          e.stopPropagation(), z()
        }
      })]
    }), null != L && L(), n && null != t && (0, r.jsx)(I.Z, {
      iconSize: "sm",
      item: i,
      wishlistId: t,
      className: v.removeItemButton
    })]
  });
  return F ? (0, r.jsx)(o.i_, {
    asContainer: true,
    title: j.intl.formatToPlainString(j.t.TL4ktE, {
      username: W
    }),
    body: i.skuName,
    asset: Z,
    children: Y
  }) : Y
}