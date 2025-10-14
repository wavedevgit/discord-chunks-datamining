/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let S = Chunk647438.memo(function(e) {
    let {
      product: t,
      hideWishlistButton: n,
      hideProductName: i,
      hideVariantSwitcher: S,
      hidePrice: y,
      hidePrimaryCTA: k,
      hideSecondaryCTA: j,
      badgeOverride: T,
      onClickCard: L,
      onClickPrimaryCTA: I,
      onClickSecondaryCTA: B,
      onMouseEnter: A,
      onMouseLeave: N,
      onFocus: P,
      onBlur: R,
      primaryCTAText: Z,
      secondaryCTAIcon: w,
      productNameClassName: H,
      badgeClassName: D,
      cardClassName: M,
      prioritizedCurrency: F,
      onClickAnalytics: W
    } = e, U = (0, d.Nd)(), V = null == U ? true : U.tab, z = (0, v.zQ)(t), G = l.useRef(null), {
      isHoveringOrFocusing: K
    } = (0, u.Z)(G), {
      handleCardVisibilityChange: Y
    } = (0, g.E)(t.skuId, V === O.AW.CATALOG ? "full" : V), q = (0, m.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD, W), [Q, J] = (0, m.SS)(t), X = null != J && !S, $ = !k || !j, ee = !y || X, et = $ || X;
    return (0, r.jsx)(s.$, {
      innerRef: G,
      onChange: Y,
      threshold: 0,
      children: (0, r.jsx)("div", {
        className: x.productCardHoverContainer,
        children: (0, r.jsx)(a.kL8, {
          ref: G,
          onClick: null != L ? L : q,
          "aria-label": z,
          className: o()(M, x.productCardContainer),
          onFocus: () => null == P ? true : P(t.skuId),
          onBlur: () => null == R ? true : R(t.skuId),
          onMouseEnter: () => null == A ? true : A(t.skuId),
          onMouseLeave: () => null == N ? true : N(t.skuId),
          children: (0, r.jsxs)("div", {
            className: x.productCardContentContainer,
            children: [(0, r.jsxs)("div", {
              className: x.headerContainer,
              children: [(0, r.jsx)(f.Z, {
                skuId: t.skuId,
                badgeOverride: T,
                className: D,
                prioritizedCurrency: F
              }), !n && (0, r.jsx)(E.Z, {
                skuId: t.skuId,
                isCardHovered: K
              })]
            }), (0, r.jsxs)("div", {
              className: x.footerContainer,
              children: [!i && (0, r.jsx)(p.Z, {
                skuId: t.skuId,
                className: H
              }), ee && (0, r.jsxs)("div", {
                className: o()(x.footerInfoContainer, {
                  [x.footerHideOnHover]: et
                }),
                children: [!y && (0, r.jsx)(C.Z, {
                  skuId: t.skuId,
                  prioritizedCurrency: F
                }), X && J]
              }), et && (0, r.jsxs)("div", {
                className: o()(x.footerInteractibleContainer, x.footerShowOnHover),
                children: [X && J, $ && (0, r.jsxs)(a.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [!k && (0, r.jsx)(h.Z, {
                    skuId: t.skuId,
                    cardRef: G,
                    selectedVariantIndex: Q,
                    onClick: I,
                    text: Z,
                    prioritizedCurrency: F,
                    onClickAnalytics: W
                  }), !j && (0, r.jsx)(_.Z, {
                    skuId: t.skuId,
                    cardRef: G,
                    selectedVariantIndex: Q,
                    onClick: B,
                    icon: w,
                    prioritizedCurrency: F,
                    onClickAnalytics: W
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
    return null == l ? null : (0, r.jsx)(S, function(e) {
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