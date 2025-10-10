/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk297651 = require("./297651.js"),
  Chunk993222 = require("./993222.jsx"),
  Chunk932083 = require("./932083.jsx"),
  Chunk719075 = require("./719075.jsx"),
  Chunk558261 = require("./558261.jsx"),
  Chunk819882 = require("./819882.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk659755 = require("./659755.js"),
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk213301 = require("./213301.js");
let v = Chunk647438.memo(function(e) {
    let {
      product: t,
      hideProductName: n,
      hideVariantSwitcher: i,
      hidePrice: v,
      hidePrimaryCTA: O,
      hideSecondaryCTA: x,
      badgeOverride: y,
      onClickCard: T,
      onClickPrimaryCTA: j,
      onClickSecondaryCTA: L,
      onMouseEnter: k,
      onMouseLeave: I,
      onFocus: B,
      onBlur: N,
      primaryCTAText: A,
      secondaryCTAIcon: P,
      productNameClassName: R,
      badgeClassName: Z,
      cardClassName: w,
      prioritizedCurrency: H
    } = e, F = (0, u.Nd)(), D = null == F ? true : F.tab, M = (0, b.zQ)(t), W = l.useRef(null), {
      handleCardVisibilityChange: U
    } = (0, d.E)(t.skuId, D === E.AW.CATALOG ? "full" : D), V = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD), [z, G] = (0, _.SS)(t), K = null != G && !i, Y = !O || !x, q = !v || K, Q = Y || K;
    return (0, r.jsx)(s.$, {
      innerRef: W,
      onChange: U,
      threshold: 0,
      children: (0, r.jsx)("div", {
        className: S.productCardHoverContainer,
        children: (0, r.jsx)(a.kL8, {
          ref: W,
          onClick: null != T ? T : V,
          "aria-label": M,
          className: o()(w, S.productCardContainer),
          onFocus: () => null == B ? true : B(t.skuId),
          onBlur: () => null == N ? true : N(t.skuId),
          onMouseEnter: () => null == k ? true : k(t.skuId),
          onMouseLeave: () => null == I ? true : I(t.skuId),
          children: (0, r.jsxs)("div", {
            className: S.productCardContentContainer,
            children: [(0, r.jsx)(g.Z, {
              skuId: t.skuId,
              badgeOverride: y,
              className: Z,
              prioritizedCurrency: H
            }), (0, r.jsxs)("div", {
              className: S.footerContainer,
              children: [!n && (0, r.jsx)(f.Z, {
                skuId: t.skuId,
                className: R
              }), q && (0, r.jsxs)("div", {
                className: o()(S.footerInfoContainer, {
                  [S.footerHideOnHover]: Q
                }),
                children: [!v && (0, r.jsx)(p.Z, {
                  skuId: t.skuId,
                  prioritizedCurrency: H
                }), K && G]
              }), Q && (0, r.jsxs)("div", {
                className: o()(S.footerInteractibleContainer, S.footerShowOnHover),
                children: [K && G, Y && (0, r.jsxs)(a.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [!O && (0, r.jsx)(C.Z, {
                    skuId: t.skuId,
                    cardRef: W,
                    selectedVariantIndex: z,
                    onClick: j,
                    text: A,
                    prioritizedCurrency: H
                  }), !x && (0, r.jsx)(h.Z, {
                    skuId: t.skuId,
                    cardRef: W,
                    selectedVariantIndex: z,
                    onClick: L,
                    icon: P,
                    prioritizedCurrency: H
                  })]
                })]
              })]
            }), (0, r.jsx)(m.Z, {
              skuId: t.skuId
            })]
          })
        })
      })
    })
  }),
  O = e => {
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
    }(e, ["skuId"]), l = (0, _.LJ)(t);
    return null == l ? null : (0, r.jsx)(v, function(e) {
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