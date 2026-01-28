/** Chunk was on web.js **/
/** chunk id: 242640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E,
  Y: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk594832 = require("./594832.js"),
  Chunk954571 = require("./954571.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk941165 = require("./941165.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752276 = require("./752276.js"),
  g = function(e) {
    return e.SMALL = "small", e.SMALL_SQUARE = "small-square", e.MEDIUM = "medium", e.LARGE = "large", e.FLEX = "flex", e
  }({});

function E(e) {
  let {
    item: t,
    wishlistId: n,
    isOwner: a,
    cardSize: g = "medium",
    showOverlayButton: E = true,
    cardRef: y,
    renderItemPreview: b,
    accessibleLabel: O,
    onCardClick: v,
    buttonCTALabel: A,
    buttonIcon: I,
    isOwned: S = false,
    renderSourceIcon: T,
    dragHandle: C,
    giftingOrigin: N,
    source: w
  } = e, R = i.useRef(null), P = i.useRef(null), D = null != y ? y : P, {
    trackUserProfileWishlistAction: L
  } = (0, u.NJ)(), x = (0, r.jsx)("div", {
    className: m.Af,
    children: (0, r.jsx)(s.rOg, {
      size: "custom",
      color: s.LU0.colors.WHITE,
      width: 38,
      height: 38,
      className: o()(m.x6, m.AI),
      "aria-label": h.intl.string(h.t.L5Pt9L)
    })
  }), M = (0, r.jsx)("div", {
    className: m.Lw,
    children: (0, r.jsx)(s.Button, {
      focusProps: {
        ringTarget: D
      },
      variant: "primary",
      size: "sm",
      text: A,
      icon: I,
      onClick: e => {
        e.stopPropagation(), j()
      },
      fullWidth: true
    })
  }), j = () => {
    if (N === _.vQ.DM_CHANNEL_WISHLIST) {
      let e = w === l.uS.WISHLIST ? "wishlist" : "shop";
      c.default.track(p.HAw.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: w === l.uS.WISHLIST ? n : null,
        product_line: t.skuProductLine
      })
    } else null != n && L({
      wishlistId: n,
      action: f.Mq.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      productLines: new Set([t.skuProductLine])
    });
    v()
  };
  return (0, r.jsxs)("div", {
    ref: R,
    className: m.kL,
    children: [(0, r.jsxs)("div", {
      ref: D,
      className: o()(m.Nr, {
        [m.go]: S,
        [m.tM]: "small-square" === g,
        [m.IU]: "small" === g,
        [m.Sd]: "large" === g,
        [m.uE]: "flex" === g
      }),
      onClick: j,
      children: [(0, r.jsx)(s.AC4, {
        children: (0, r.jsx)(s.H, {
          children: O
        })
      }), (0, r.jsx)("div", {
        className: m.ho,
        children: b()
      }), S && x, E ? M : (0, r.jsx)(s.DUT, {
        "aria-label": A,
        focusProps: {
          ringTarget: D
        },
        onClick: e => {
          e.stopPropagation(), j()
        }
      })]
    }), null != T && T(), C, a && null != n && (0, r.jsx)(d.A, {
      iconSize: "sm",
      item: t,
      wishlistId: n,
      className: m.eP
    })]
  })
}