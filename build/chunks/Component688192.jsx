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
  Chunk232644 = require("./232644.js"),
  y = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
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
    giftingOrigin: R,
    source: w
  } = e, D = i.useRef(null), x = i.useRef(null), L = null != v ? v : x, {
    trackUserProfileWishlistAction: j
  } = (0, p.KZ)(), M = a && true === t.isOwned && null != t.gifterUserId, k = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null, U = null != k ? f.ZP.getName(k) : null, G = M && null != k && null != U && "" !== U, Z = G ? (0, r.jsx)(l.qEK, {
    src: k.getAvatarURL(true, 48),
    size: l.EFr.SIZE_48,
    "aria-label": U
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
  }), F = (0, r.jsx)("div", {
    className: b.overlay,
    children: (0, r.jsx)(l.Button, {
      focusProps: {
        ringTarget: L
      },
      variant: "primary",
      size: "sm",
      text: C,
      icon: A,
      onClick: e => {
        e.stopPropagation(), V()
      },
      fullWidth: true
    })
  }), V = () => {
    if (R === g.Wt.DM_CHANNEL_WISHLIST) {
      let e = w === c.lr.WISHLIST ? "wishlist" : "shop";
      d.default.track(h.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: w === c.lr.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && j({
      wishlistId: n,
      action: m.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      productLines: new Set([t.skuProductLine])
    });
    T()
  }, H = (0, r.jsxs)("div", {
    ref: D,
    className: b.container,
    children: [(0, r.jsxs)("div", {
      ref: L,
      className: o()(b.card, {
        [b.isOwned]: N,
        [b.smallCard]: "small" === y,
        [b.largeCard]: "large" === y
      }),
      onClick: V,
      children: [(0, r.jsx)(l.nn4, {
        children: (0, r.jsx)(l.H, {
          children: I
        })
      }), (0, r.jsx)("div", {
        className: b.cardPreview,
        children: S()
      }), N && B, O ? F : (0, r.jsx)(l.P3F, {
        "aria-label": C,
        focusProps: {
          ringTarget: L
        },
        onClick: e => {
          e.stopPropagation(), V()
        }
      })]
    }), null != P && P(), a && null != n && (0, r.jsx)(_.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: b.removeItemButton
    })]
  });
  return G ? (0, r.jsx)(s.i_, {
    asContainer: true,
    title: E.intl.formatToPlainString(E.t.TL4ktE, {
      username: U
    }),
    body: t.skuName,
    asset: Z,
    children: H
  }) : H
}