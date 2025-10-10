/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk104505 = require("./104505.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk297651 = require("./297651.js"),
  Chunk993222 = require("./993222.jsx"),
  Chunk932083 = require("./932083.jsx"),
  Chunk719075 = require("./719075.jsx"),
  Chunk558261 = require("./558261.jsx"),
  Chunk819882 = require("./819882.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk659755 = require("./659755.js"),
  Chunk268865 = require("./268865.jsx"),
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk213301 = require("./213301.js");
let x = Chunk647438.memo(function(e) {
    let {
      product: t,
      hideWishlistButton: n,
      hideProductName: i,
      hideVariantSwitcher: x,
      hidePrice: y,
      hidePrimaryCTA: j,
      hideSecondaryCTA: T,
      badgeOverride: L,
      onClickCard: k,
      onClickPrimaryCTA: I,
      onClickSecondaryCTA: B,
      onMouseEnter: N,
      onMouseLeave: P,
      onFocus: A,
      onBlur: R,
      primaryCTAText: Z,
      secondaryCTAIcon: w,
      productNameClassName: H,
      badgeClassName: F,
      cardClassName: D,
      prioritizedCurrency: M
    } = e, W = (0, d.Nd)(), U = null == W ? true : W.tab, V = (0, v.zQ)(t), z = l.useRef(null), {
      isHoveringOrFocusing: G
    } = (0, u.Z)(z), {
      handleCardVisibilityChange: K
    } = (0, g.E)(t.skuId, U === S.AW.CATALOG ? "full" : U), Y = (0, m.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD), [q, Q] = (0, m.SS)(t), J = null != Q && !x, X = !j || !T, $ = !y || J, ee = X || J;
    return (0, r.jsx)(o.$, {
      innerRef: z,
      onChange: K,
      threshold: 0,
      children: (0, r.jsx)("div", {
        className: O.productCardHoverContainer,
        children: (0, r.jsx)(a.kL8, {
          ref: z,
          onClick: null != k ? k : Y,
          "aria-label": V,
          className: s()(D, O.productCardContainer),
          onFocus: () => null == A ? true : A(t.skuId),
          onBlur: () => null == R ? true : R(t.skuId),
          onMouseEnter: () => null == N ? true : N(t.skuId),
          onMouseLeave: () => null == P ? true : P(t.skuId),
          children: (0, r.jsxs)("div", {
            className: O.productCardContentContainer,
            children: [(0, r.jsxs)("div", {
              className: O.headerContainer,
              children: [(0, r.jsx)(f.Z, {
                skuId: t.skuId,
                badgeOverride: L,
                className: F,
                prioritizedCurrency: M
              }), !n && (0, r.jsx)(E.Z, {
                skuId: t.skuId,
                isCardHovered: G
              })]
            }), (0, r.jsxs)("div", {
              className: O.footerContainer,
              children: [!i && (0, r.jsx)(p.Z, {
                skuId: t.skuId,
                className: H
              }), $ && (0, r.jsxs)("div", {
                className: s()(O.footerInfoContainer, {
                  [O.footerHideOnHover]: ee
                }),
                children: [!y && (0, r.jsx)(C.Z, {
                  skuId: t.skuId,
                  prioritizedCurrency: M
                }), J && Q]
              }), ee && (0, r.jsxs)("div", {
                className: s()(O.footerInteractibleContainer, O.footerShowOnHover),
                children: [J && Q, X && (0, r.jsxs)(a.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [!j && (0, r.jsx)(h.Z, {
                    skuId: t.skuId,
                    cardRef: z,
                    selectedVariantIndex: q,
                    onClick: I,
                    text: Z,
                    prioritizedCurrency: M
                  }), !T && (0, r.jsx)(_.Z, {
                    skuId: t.skuId,
                    cardRef: z,
                    selectedVariantIndex: q,
                    onClick: B,
                    icon: w,
                    prioritizedCurrency: M
                  })]
                })]
              })]
            }), (0, r.jsx)(b.Z, {
              skuId: t.skuId
            })]
          })
        })
      })
    })
  }),
  y = e => {
    let {
      skuId: t
    } = e, n = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["skuId"]), l = (0, m.LJ)(t);
    return null == l ? null : (0, r.jsx)(x, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      product: l
    }, n))
  }