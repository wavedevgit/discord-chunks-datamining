/** Chunk was on web.js **/
/** chunk id: 242640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  Y: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk941165 = require("./941165.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752276 = require("./752276.js"),
  y = function(e) {
    return e.SMALL = "small", e.SMALL_SQUARE = "small-square", e.MEDIUM = "medium", e.LARGE = "large", e.FLEX = "flex", e
  }({});

function O(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: a,
    cardSize: y = "medium",
    showOverlayButton: O = true,
    cardRef: A,
    renderItemPreview: v,
    accessibleLabel: S,
    onCardClick: I,
    buttonCTALabel: T,
    buttonIcon: C,
    isOwned: N = false,
    renderSourceIcon: R,
    dragHandle: w,
    giftingOrigin: P,
    source: D
  } = e, x = i.useRef(null), L = i.useRef(null), j = null != A ? A : L, {
    trackUserProfileWishlistAction: M
  } = (0, p.NJ)(), k = a && true === t.isOwned && null != t.gifterUserId, U = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null, G = null != U ? f.Ay.getName(U) : null, V = k && null != U && null != G && "" !== G, F = V ? (0, r.jsx)(l.euF, {
    src: U.getAvatarURL(true, 48),
    size: l._3J.SIZE_48,
    "aria-label": G
  }) : true, B = (0, r.jsx)("div", {
    className: b.Af,
    children: (0, r.jsx)(l.rOg, {
      size: "custom",
      color: l.LU0.colors.WHITE,
      width: 38,
      height: 38,
      className: s()(b.x6, b.AI),
      "aria-label": E.intl.string(E.t.L5Pt9L)
    })
  }), H = (0, r.jsx)("div", {
    className: b.Lw,
    children: (0, r.jsx)(l.Button, {
      focusProps: {
        ringTarget: j
      },
      variant: "primary",
      size: "sm",
      text: T,
      icon: C,
      onClick: e => {
        e.stopPropagation(), Y()
      },
      fullWidth: true
    })
  }), Y = () => {
    if (P === g.vQ.DM_CHANNEL_WISHLIST) {
      let e = D === c.uS.WISHLIST ? "wishlist" : "shop";
      d.default.track(m.HAw.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: D === c.uS.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && M({
      wishlistId: n,
      action: h.Mq.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      productLines: new Set([t.skuProductLine])
    });
    I()
  }, W = (0, r.jsxs)("div", {
    ref: x,
    className: b.kL,
    children: [(0, r.jsxs)("div", {
      ref: j,
      className: s()(b.Nr, {
        [b.go]: N,
        [b.tM]: "small-square" === y,
        [b.IU]: "small" === y,
        [b.Sd]: "large" === y,
        [b.uE]: "flex" === y
      }),
      onClick: Y,
      children: [(0, r.jsx)(l.AC4, {
        children: (0, r.jsx)(l.H, {
          children: S
        })
      }), (0, r.jsx)("div", {
        className: b.ho,
        children: v()
      }), N && B, O ? H : (0, r.jsx)(l.DUT, {
        "aria-label": T,
        focusProps: {
          ringTarget: j
        },
        onClick: e => {
          e.stopPropagation(), Y()
        }
      })]
    }), null != R && R(), w, a && null != n && (0, r.jsx)(_.A, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: b.eP
    })]
  });
  return V ? (0, r.jsx)(o.un, {
    asContainer: true,
    title: E.intl.formatToPlainString(E.t.TL4ktE, {
      username: G
    }),
    body: t.skuName,
    asset: F,
    children: W
  }) : W
}