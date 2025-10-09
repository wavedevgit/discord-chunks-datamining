/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
      hideVariantSwitcher: s,
      hidePrice: v,
      hidePrimaryCTA: x,
      hideSecondaryCTA: O,
      badgeOverride: y,
      onClickCard: T,
      onClickPrimaryCTA: j,
      onClickSecondaryCTA: k,
      onMouseEnter: L,
      onMouseLeave: I,
      onFocus: P,
      onBlur: N,
      primaryCTAText: B,
      secondaryCTAIcon: A,
      productNameClassName: R,
      badgeClassName: Z,
      cardClassName: w
    } = e, F = (0, u.Nd)(), H = null == F ? true : F.tab, D = (0, b.zQ)(t), M = l.useRef(null), {
      handleCardVisibilityChange: W
    } = (0, d.E)(t.skuId, H === E.AW.CATALOG ? "full" : H), U = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD), [V, z] = (0, _.SS)(t), G = null != z && !s;
    return (0, r.jsx)(a.$, {
      innerRef: M,
      onChange: W,
      threshold: 0,
      children: (0, r.jsx)("div", {
        className: S.baseProductCardHoverContainer,
        children: (0, r.jsx)(o.kL8, {
          ref: M,
          onClick: null != T ? T : U,
          "aria-label": D,
          className: i()(w, S.baseProductCardContainer),
          onFocus: () => null == P ? true : P(t.skuId),
          onBlur: () => null == N ? true : N(t.skuId),
          onMouseEnter: () => null == L ? true : L(t.skuId),
          onMouseLeave: () => null == I ? true : I(t.skuId),
          children: (0, r.jsxs)("div", {
            className: S.baseProductCardContentContainer,
            children: [(0, r.jsx)(g.Z, {
              skuId: t.skuId,
              badgeOverride: y,
              className: Z
            }), (0, r.jsxs)("div", {
              className: S.innerContainer,
              children: [(0, r.jsxs)("div", {
                className: i()(S.baseProductCardDetailsContainer, {
                  [S.hasVariantSwitcher]: G
                }),
                children: [!n && (0, r.jsx)(f.Z, {
                  skuId: t.skuId,
                  className: R
                }), G && (0, r.jsx)("div", {
                  className: S.hoveredVariantSwitcher,
                  children: z
                })]
              }), (0, r.jsxs)("div", {
                className: S.baseProductCardFooter,
                children: [!v && (0, r.jsx)(p.Z, {
                  skuId: t.skuId
                }), G && z]
              })]
            }), (0, r.jsx)("div", {
              className: S.innerHover,
              children: (!x || !O) && (0, r.jsxs)(o.hE2, {
                wrap: false,
                fullWidth: true,
                children: [!x && (0, r.jsx)(C.Z, {
                  skuId: t.skuId,
                  cardRef: M,
                  selectedVariantIndex: V,
                  onClick: j,
                  text: B
                }), !O && (0, r.jsx)(h.Z, {
                  skuId: t.skuId,
                  cardRef: M,
                  selectedVariantIndex: V,
                  onClick: k,
                  icon: A
                })]
              })
            }), (0, r.jsx)(m.Z, {
              skuId: t.skuId
            })]
          })
        })
      })
    })
  }),
  x = e => {
    let {
      skuId: t
    } = e, n = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
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