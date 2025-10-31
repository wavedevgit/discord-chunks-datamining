/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk213301 = require("./213301.js");
let j = Chunk647438.memo(function(e) {
    let {
      product: t,
      hideWishlistButton: n,
      hideProductName: i,
      hideVariantSwitcher: j,
      hidePrice: k,
      hidePrimaryCTA: I,
      hideSecondaryCTA: T,
      badgeOverride: L,
      skipLimitedTimeCheck: B,
      onClickCard: P,
      onClickPrimaryCTA: A,
      onClickSecondaryCTA: N,
      onMouseEnter: Z,
      onMouseLeave: R,
      onFocus: w,
      onBlur: H,
      primaryCTAText: D,
      secondaryCTAIcon: M,
      productNameClassName: F,
      badgeClassName: W,
      cardClassName: V,
      prioritizedCurrency: U,
      onClickAnalytics: z
    } = e, G = (0, p.Nd)(), K = null == G ? true : G.tab, Y = (0, O.zQ)(t), q = l.useRef(null), {
      isHoveringOrFocusing: J
    } = (0, d.Z)(q), {
      handleCardVisibilityChange: Q
    } = (0, g.E)(t.skuId, K === S.AW.CATALOG ? "full" : K), X = (0, b.J7)(t, u.Z.COLLECTIBLES_SHOP_CARD, z), $ = t.type === a.Z.VARIANTS_GROUP && !j, ee = !I || !T, et = !k || $, en = ee || $;
    return (0, r.jsx)(o.$, {
      innerRef: q,
      onChange: Q,
      threshold: 0,
      children: (0, r.jsx)(c.kL8, {
        ref: q,
        onClick: null != P ? P : X,
        "aria-label": Y,
        className: s()(V, y.productCardContainer, {
          [y.hovered]: J
        }),
        onFocus: () => null == w ? true : w(t.skuId),
        onBlur: () => null == H ? true : H(t.skuId),
        onMouseEnter: () => null == Z ? true : Z(t.skuId),
        onMouseLeave: () => null == R ? true : R(t.skuId),
        children: (0, r.jsxs)("div", {
          className: y.productCardContentContainer,
          children: [(0, r.jsx)("div", {
            className: s()(y.productPreviewContainer, {
              [y.hasBottomContent]: !i || et || en
            }),
            children: (0, r.jsx)(v.Z, {
              skuId: t.skuId,
              isCardHovered: J
            })
          }), (0, r.jsxs)("div", {
            className: y.headerContainer,
            children: [(0, r.jsx)(f.Z, {
              skuId: t.skuId,
              badgeOverride: L,
              className: W,
              prioritizedCurrency: U,
              skipLimitedTimeCheck: B
            }), !n && (0, r.jsx)(x.Z, {
              skuId: t.skuId,
              isCardHovered: J
            })]
          }), (0, r.jsxs)("div", {
            className: y.footerContainer,
            children: [(0, r.jsx)("div", {
              className: y.footerGradient
            }), (0, r.jsxs)("div", {
              className: y.footerContent,
              children: [!i && (0, r.jsx)(h.Z, {
                skuId: t.skuId,
                className: s()({
                  [y.shadowOnHover]: en
                }, F)
              }), et && (0, r.jsxs)("div", {
                className: s()(y.footerInfoContainer, {
                  [y.removePaddingOnHover]: !$
                }),
                children: [!k && (0, r.jsx)("div", {
                  className: y.priceContainer,
                  "aria-hidden": true,
                  children: (0, r.jsx)(C.Z, {
                    skuId: t.skuId,
                    prioritizedCurrency: U
                  })
                }), $ && (0, r.jsx)(E.Z, {
                  skuId: t.skuId,
                  isCollapsed: !J
                })]
              }), ee && (0, r.jsx)("div", {
                className: y.footerButtonContainer,
                children: (0, r.jsxs)(c.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [!I && (0, r.jsx)(m.Z, {
                    skuId: t.skuId,
                    cardRef: q,
                    onClick: A,
                    text: D,
                    prioritizedCurrency: U,
                    onClickAnalytics: z
                  }), !T && (0, r.jsx)(_.Z, {
                    skuId: t.skuId,
                    cardRef: q,
                    onClick: N,
                    icon: M,
                    prioritizedCurrency: U,
                    onClickAnalytics: z
                  })]
                })
              })]
            })]
          })]
        })
      })
    })
  }),
  k = e => {
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
    }(e, ["skuId"]), l = (0, b.LJ)(t);
    return null == l ? null : (0, r.jsx)(j, function(e) {
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