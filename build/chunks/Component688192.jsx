/** Chunk was on web.js **/
/** chunk id: 688192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => y,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk889588 = require("./889588.js"),
  y = function(e) {
    return e.SMALL = "small", e.SMALL_SQUARE = "small-square", e.MEDIUM = "medium", e.LARGE = "large", e
  }({});

function O(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: a,
    cardSize: y = "medium",
    showOverlayButton: O = true,
    cardRef: v,
    renderItemPreview: S,
    accessibleLabel: I,
    onCardClick: T,
    buttonCTALabel: C,
    buttonIcon: A,
    isOwned: N = false,
    renderSourceIcon: P,
    dragHandle: R,
    giftingOrigin: w,
    source: D
  } = e, x = i.useRef(null), L = i.useRef(null), j = null != v ? v : L, {
    trackUserProfileWishlistAction: M
  } = (0, p.KZ)(), k = a && true === t.isOwned && null != t.gifterUserId, U = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null, G = null != U ? f.ZP.getName(U) : null, Z = k && null != U && null != G && "" !== G, F = Z ? (0, r.jsx)(l.qEK, {
    src: U.getAvatarURL(true, 48),
    size: l.EFr.SIZE_48,
    "aria-label": G
  }) : true, B = (0, r.jsx)("div", {
    className: b.cardStateIconWrapper,
    children: (0, r.jsx)(l.sV5, {
      size: "custom",
      color: l.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: o()(b.cardStateIcon, b.checkmark),
      "aria-label": E.intl.string(E.t.L5Pt9L)
    })
  }), V = (0, r.jsx)("div", {
    className: b.overlay,
    children: (0, r.jsx)(l.Button, {
      focusProps: {
        ringTarget: j
      },
      variant: "primary",
      size: "sm",
      text: C,
      icon: A,
      onClick: e => {
        e.stopPropagation(), H()
      },
      fullWidth: true
    })
  }), H = () => {
    if (w === g.Wt.DM_CHANNEL_WISHLIST) {
      let e = D === c.lr.WISHLIST ? "wishlist" : "shop";
      d.default.track(h.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: D === c.lr.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && M({
      wishlistId: n,
      action: m.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      productLines: new Set([t.skuProductLine])
    });
    T()
  }, Y = (0, r.jsxs)("div", {
    ref: x,
    className: b.container,
    children: [(0, r.jsxs)("div", {
      ref: j,
      className: o()(b.card, {
        [b.isOwned]: N,
        [b.smallSquareCard]: "small-square" === y,
        [b.smallCard]: "small" === y,
        [b.largeCard]: "large" === y
      }),
      onClick: H,
      children: [(0, r.jsx)(l.nn4, {
        children: (0, r.jsx)(l.H, {
          children: I
        })
      }), (0, r.jsx)("div", {
        className: b.cardPreview,
        children: S()
      }), N && B, O ? V : (0, r.jsx)(l.P3F, {
        "aria-label": C,
        focusProps: {
          ringTarget: j
        },
        onClick: e => {
          e.stopPropagation(), H()
        }
      })]
    }), null != P && P(), R, a && null != n && (0, r.jsx)(_.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: b.removeItemButton
    })]
  });
  return Z ? (0, r.jsx)(s.i_, {
    asContainer: true,
    title: E.intl.formatToPlainString(E.t.TL4ktE, {
      username: G
    }),
    body: t.skuName,
    asset: F,
    children: Y
  }) : Y
}