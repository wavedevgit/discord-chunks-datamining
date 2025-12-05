/** Chunk was on 88282 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
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
  Chunk311583 = require("./311583.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk659755 = require("./659755.jsx"),
  Chunk406667 = require("./406667.jsx"),
  Chunk268865 = require("./268865.jsx"),
  Chunk361110 = require("./361110.js"),
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk213301 = require("./213301.js");
let O = Chunk473749.memo(function(e) {
    let {
      product: t,
      hideWishlistButton: n,
      hideProductName: r,
      hideVariantSwitcher: O,
      hidePrice: T,
      hidePrimaryCTA: P,
      hideSecondaryCTA: I,
      badgeOverride: w,
      skipLimitedTimeCheck: k,
      onClickCard: R,
      onClickPrimaryCTA: A,
      onClickSecondaryCTA: Z,
      onMouseEnter: D,
      onMouseLeave: L,
      onFocus: M,
      onBlur: U,
      primaryCTAText: B,
      secondaryCTAIcon: F,
      productNameClassName: G,
      badgeClassName: z,
      cardClassName: V,
      prioritizedCurrency: H,
      onClickAnalytics: W
    } = e, {
      previewingVariantIndex: K,
      handleEntering: q,
      handleLeaving: Y
    } = (0, C.f)(t), J = (0, v.jB)(), X = (0, m.Nd)(), Q = null == X ? true : X.tab, $ = (0, S.zQ)(t), ee = l.useRef(null), {
      isHoveringOrFocusing: et
    } = (0, u.Z)(ee), {
      handleCardVisibilityChange: en
    } = (0, p.E)(t.skuId, Q === E.AW.CATALOG ? "full" : Q), ea = (0, v.J7)(t, d.Z.COLLECTIBLES_SHOP_CARD, W, J), el = t.type === s.Z.VARIANTS_GROUP && !O, er = !P || !I, ei = !(T && r) || el, es = ei || er, eo = er || el;
    return (0, a.jsx)(o.$, {
      innerRef: ee,
      onChange: en,
      threshold: 0,
      children: (0, a.jsx)(c.kL8, {
        ref: ee,
        onClick: null != R ? R : ea,
        "aria-label": $,
        className: i()(V, N.productCardContainer, {
          [N.hovered]: et
        }),
        onFocus: () => null == M ? true : M(t.skuId),
        onBlur: () => null == U ? true : U(t.skuId),
        onMouseEnter: () => null == D ? true : D(t.skuId),
        onMouseLeave: () => null == L ? true : L(t.skuId),
        children: (0, a.jsxs)("div", {
          className: N.productCardContentContainer,
          children: [(0, a.jsx)("div", {
            className: i()(N.productPreviewContainer, {
              [N.hasBottomContent]: !r || ei || eo
            }),
            children: (0, a.jsx)(j.Z, {
              skuId: t.skuId,
              isCardHovered: et,
              overrideVariantIndex: K
            })
          }), (0, a.jsxs)("div", {
            className: N.headerContainer,
            children: [(0, a.jsx)(h.Z, {
              skuId: t.skuId,
              badgeOverride: w,
              className: z,
              prioritizedCurrency: H,
              skipLimitedTimeCheck: k
            }), !n && (0, a.jsx)(y.Z, {
              skuId: t.skuId,
              isCardHovered: et
            })]
          }), es && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: N.footerGradient
            }), (0, a.jsxs)("div", {
              className: N.footerContainer,
              children: [ei && (0, a.jsxs)("div", {
                className: N.footerInfoContainer,
                children: [!(r && T) && (0, a.jsxs)("div", {
                  className: N.footerInfoLeft,
                  children: [!r && (0, a.jsx)(x.Z, {
                    skuId: t.skuId,
                    className: i()(G, N.productName)
                  }), !T && (0, a.jsx)("div", {
                    className: N.footerInfoShrinkOnHover,
                    "aria-hidden": true,
                    children: (0, a.jsx)(f.Z, {
                      skuId: t.skuId,
                      prioritizedCurrency: H
                    })
                  })]
                }), el && (0, a.jsx)(_.Z, {
                  skuId: t.skuId,
                  isCollapsed: !et,
                  onVariantEnter: q,
                  onVariantExit: Y
                })]
              }), er && (0, a.jsx)("div", {
                className: N.footerButtonContainer,
                children: (0, a.jsxs)(c.ButtonGroup, {
                  wrap: false,
                  className: N.footerButtonGroup,
                  fullWidth: true,
                  children: [!P && (0, a.jsx)(g.Z, {
                    skuId: t.skuId,
                    cardRef: ee,
                    onClick: A,
                    text: B,
                    prioritizedCurrency: H,
                    onClickAnalytics: W
                  }), !I && (0, a.jsx)(b.Z, {
                    skuId: t.skuId,
                    cardRef: ee,
                    onClick: Z,
                    icon: F,
                    prioritizedCurrency: H,
                    onClickAnalytics: W
                  })]
                })
              })]
            })]
          })]
        })
      })
    })
  }),
  T = e => {
    let {
      skuId: t
    } = e, n = function(e, t) {
      if (null == e) return {};
      var n, a, l = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["skuId"]), l = (0, v.LJ)(t);
    return null == l ? null : (0, a.jsx)(O, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      product: l
    }, n))
  }