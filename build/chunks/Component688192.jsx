/** Chunk was on 46467 **/
/** chunk id: 688192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => v,
  Z: () => j
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  v = ((r = {}).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r);

function j(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: r,
    cardSize: o = "medium",
    showOverlayButton: v = true,
    cardRef: j,
    renderItemPreview: x,
    accessibleLabel: C,
    onCardClick: E,
    buttonCTALabel: S,
    buttonIcon: I,
    isOwned: P = false,
    renderSourceIcon: N,
    giftingOrigin: Z,
    source: w
  } = e, T = l.useRef(null), A = l.useRef(null), R = null != j ? j : A, {
    trackUserProfileWishlistAction: D
  } = (0, p.KZ)(), M = r && true === t.isOwned && null != t.gifterUserId, L = null != t.gifterUserId ? d.default.getUser(t.gifterUserId) : null, k = null != L ? f.ZP.getName(L) : null, G = M && null != L && null != k && "" !== k, U = G ? (0, i.jsx)(c.qEK, {
    src: L.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": k
  }) : true, B = (0, i.jsx)("div", {
    className: O.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(O.cardStateIcon, O.checkmark),
      "aria-label": y.intl.string(y.t.L5Pt9L)
    })
  }), F = (0, i.jsx)("div", {
    className: O.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: R
      },
      variant: "primary",
      size: "sm",
      text: S,
      icon: I,
      onClick: e => {
        e.stopPropagation(), V()
      },
      fullWidth: true
    })
  }), V = () => {
    if (Z === _.Wt.DM_CHANNEL_WISHLIST) {
      let e = w === u.lr.WISHLIST ? "wishlist" : "shop";
      h.default.track(b.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: w === u.lr.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && D({
      wishlistId: n,
      action: m.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      productLines: new Set([t.skuProductLine])
    });
    E()
  }, H = (0, i.jsxs)("div", {
    ref: T,
    className: O.container,
    children: [(0, i.jsxs)("div", {
      ref: R,
      className: a()(O.card, {
        [O.isOwned]: P,
        [O.smallCard]: "small" === o,
        [O.largeCard]: "large" === o
      }),
      onClick: V,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: C
        })
      }), (0, i.jsx)("div", {
        className: O.cardPreview,
        children: x()
      }), P && B, v ? F : (0, i.jsx)(c.P3F, {
        "aria-label": S,
        focusProps: {
          ringTarget: R
        },
        onClick: e => {
          e.stopPropagation(), V()
        }
      })]
    }), null != N && N(), r && null != n && (0, i.jsx)(g.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: O.removeItemButton
    })]
  });
  return G ? (0, i.jsx)(s.i_, {
    asContainer: true,
    title: y.intl.formatToPlainString(y.t.TL4ktE, {
      username: k
    }),
    body: t.skuName,
    asset: U,
    children: H
  }) : H
}