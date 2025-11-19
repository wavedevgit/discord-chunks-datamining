/** Chunk was on 65354 **/
/** chunk id: 688192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => C,
  Z: () => x
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  C = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r);

function x(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: r,
    cardSize: o = "medium",
    showOverlayButton: C = true,
    cardRef: x,
    renderItemPreview: E,
    accessibleLabel: S,
    onCardClick: I,
    buttonCTALabel: P,
    buttonIcon: N,
    isOwned: Z = false,
    renderSourceIcon: w,
    giftingOrigin: T,
    source: A
  } = e, R = l.useRef(null), D = l.useRef(null), L = null != x ? x : D, {
    analyticsLocations: M
  } = (0, u.ZP)(), k = r && true === t.isOwned && null != t.gifterUserId, G = null != t.gifterUserId ? h.default.getUser(t.gifterUserId) : null, U = null != G ? g.ZP.getName(G) : null, B = k && null != G && null != U && "" !== U, F = B ? (0, i.jsx)(c.qEK, {
    src: G.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": U
  }) : null, V = (0, i.jsx)("div", {
    className: j.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(j.cardStateIcon, j.checkmark),
      "aria-label": v.intl.string(v.t.L5Pt9L)
    })
  }), H = (0, i.jsx)("div", {
    className: j.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: L
      },
      variant: "primary",
      size: "sm",
      text: P,
      icon: N,
      onClick: e => {
        e.stopPropagation(), z()
      },
      fullWidth: true
    })
  }), z = () => {
    if (T === O.Wt.DM_CHANNEL_WISHLIST) {
      let e = A === p.lr.WISHLIST ? "wishlist" : "shop";
      f.default.track(y.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: A === p.lr.WISHLIST ? n : null
      })
    } else if (null != n) {
      var e;
      let r = d.Z.getWishlist(n),
        i = null != (e = null == r ? true : r.hasThirdPartySku()) && e;
      (0, m.Er)({
        wishlistId: n,
        action: _.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: M,
        hasThirdPartySku: i
      })
    }
    I()
  }, W = (0, i.jsxs)("div", {
    ref: R,
    className: j.container,
    children: [(0, i.jsxs)("div", {
      ref: L,
      className: a()(j.card, {
        [j.isOwned]: Z,
        [j.smallCard]: "small" === o,
        [j.largeCard]: "large" === o
      }),
      onClick: z,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: S
        })
      }), (0, i.jsx)("div", {
        className: j.cardPreview,
        children: E()
      }), Z && V, C ? H : (0, i.jsx)(c.P3F, {
        "aria-label": P,
        focusProps: {
          ringTarget: L
        },
        onClick: e => {
          e.stopPropagation(), z()
        }
      })]
    }), null != w && w(), r && null != n && (0, i.jsx)(b.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: j.removeItemButton
    })]
  });
  return B ? (0, i.jsx)(s.i_, {
    asContainer: true,
    title: v.intl.formatToPlainString(v.t.TL4ktE, {
      username: U
    }),
    body: t.skuName,
    asset: F,
    children: W
  }) : W
}