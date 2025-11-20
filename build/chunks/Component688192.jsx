/** Chunk was on 65354 **/
/** chunk id: 688192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => j,
  Z: () => x
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  j = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r);

function x(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: r,
    cardSize: o = "medium",
    showOverlayButton: j = true,
    cardRef: x,
    renderItemPreview: C,
    accessibleLabel: E,
    onCardClick: S,
    buttonCTALabel: I,
    buttonIcon: P,
    isOwned: N = false,
    renderSourceIcon: Z,
    giftingOrigin: w,
    source: T
  } = e, A = l.useRef(null), R = l.useRef(null), D = null != x ? x : R, {
    analyticsLocations: L
  } = (0, u.ZP)(), M = r && true === t.isOwned && null != t.gifterUserId, k = null != t.gifterUserId ? f.default.getUser(t.gifterUserId) : null, G = null != k ? h.ZP.getName(k) : null, U = M && null != k && null != G && "" !== G, B = U ? (0, i.jsx)(c.qEK, {
    src: k.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": G
  }) : true, F = (0, i.jsx)("div", {
    className: v.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(v.cardStateIcon, v.checkmark),
      "aria-label": O.intl.string(O.t.L5Pt9L)
    })
  }), V = (0, i.jsx)("div", {
    className: v.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: D
      },
      variant: "primary",
      size: "sm",
      text: I,
      icon: P,
      onClick: e => {
        e.stopPropagation(), H()
      },
      fullWidth: true
    })
  }), H = () => {
    if (w === y.Wt.DM_CHANNEL_WISHLIST) {
      let e = T === d.lr.WISHLIST ? "wishlist" : "shop";
      p.default.track(_.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: T === d.lr.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && (0, g.Er)({
      wishlistId: n,
      action: b.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: L,
      productLines: new Set([t.skuProductLine])
    });
    S()
  }, W = (0, i.jsxs)("div", {
    ref: A,
    className: v.container,
    children: [(0, i.jsxs)("div", {
      ref: D,
      className: a()(v.card, {
        [v.isOwned]: N,
        [v.smallCard]: "small" === o,
        [v.largeCard]: "large" === o
      }),
      onClick: H,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: E
        })
      }), (0, i.jsx)("div", {
        className: v.cardPreview,
        children: C()
      }), N && F, j ? V : (0, i.jsx)(c.P3F, {
        "aria-label": I,
        focusProps: {
          ringTarget: D
        },
        onClick: e => {
          e.stopPropagation(), H()
        }
      })]
    }), null != Z && Z(), r && null != n && (0, i.jsx)(m.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: v.removeItemButton
    })]
  });
  return U ? (0, i.jsx)(s.i_, {
    asContainer: true,
    title: O.intl.formatToPlainString(O.t.TL4ktE, {
      username: G
    }),
    body: t.skuName,
    asset: B,
    children: W
  }) : W
}