/** Chunk was on 22477 **/
/** chunk id: 751304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk713517 = require("./713517.js"),
  Chunk161918 = require("./161918.jsx"),
  Chunk645178 = require("./645178.js"),
  Chunk597783 = require("./597783.js"),
  Chunk268959 = require("./268959.jsx"),
  Chunk387945 = require("./387945.jsx"),
  Chunk638006 = require("./638006.jsx"),
  Chunk140877 = require("./140877.jsx"),
  Chunk834384 = require("./834384.jsx"),
  Chunk157200 = require("./157200.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk364616 = require("./364616.jsx"),
  Chunk666839 = require("./666839.jsx"),
  Chunk935094 = require("./935094.js"),
  Chunk758836 = require("./758836.js"),
  Chunk514294 = require("./514294.js");
let E = Chunk64700.memo(function(e) {
    let {
      product: t,
      hideWishlistButton: n,
      hideProductName: r,
      hideVariantSwitcher: E,
      hidePrice: T,
      hidePrimaryCTA: N,
      hideSecondaryCTA: w,
      badgeOverride: I,
      skipLimitedTimeCheck: k,
      onClickCard: P,
      onClickPrimaryCTA: R,
      onClickSecondaryCTA: D,
      onMouseEnter: M,
      onMouseLeave: L,
      onFocus: U,
      onBlur: B,
      primaryCTAText: G,
      secondaryCTAIcon: F,
      productNameClassName: V,
      badgeClassName: W,
      cardClassName: H,
      prioritizedCurrency: K,
      onClickAnalytics: z
    } = e, {
      previewingVariantIndex: q,
      handleEntering: Q,
      handleLeaving: Y
    } = (0, C.f)(t), J = (0, _.sC)(), X = (0, m.Mk)(), Z = null == X ? true : X.tab, $ = (0, p.ho)(t), ee = l.useRef(null), {
      isHoveringOrFocusing: et
    } = (0, u.A)(ee), {
      handleCardVisibilityChange: en
    } = (0, h.Z)(t.skuId, Z === S.G2.CATALOG ? "full" : Z), ea = (0, _.ql)(t, d.A.COLLECTIBLES_SHOP_CARD, z, J), el = t.type === s.R.VARIANTS_GROUP && !E, er = !N || !w, ei = !(T && r) || el, es = ei || er, eo = er || el;
    return (0, a.jsx)(o.L, {
      innerRef: ee,
      onChange: en,
      threshold: 0,
      children: (0, a.jsx)(c.sqX, {
        ref: ee,
        onClick: null != P ? P : ea,
        "aria-label": $,
        className: i()(H, O.ty, {
          [O.yo]: et
        }),
        onFocus: () => null == U ? true : U(t.skuId),
        onBlur: () => null == B ? true : B(t.skuId),
        onMouseEnter: () => null == M ? true : M(t.skuId),
        onMouseLeave: () => null == L ? true : L(t.skuId),
        children: (0, a.jsxs)("div", {
          className: O.qt,
          children: [(0, a.jsx)("div", {
            className: i()(O.Dq, {
              [O.$r]: !r || ei || eo
            }),
            children: (0, a.jsx)(f.A, {
              skuId: t.skuId,
              isCardHovered: et,
              overrideVariantIndex: q
            })
          }), (0, a.jsxs)("div", {
            className: O.N1,
            children: [(0, a.jsx)(x.A, {
              skuId: t.skuId,
              badgeOverride: I,
              className: W,
              prioritizedCurrency: K,
              skipLimitedTimeCheck: k
            }), !n && (0, a.jsx)(A.A, {
              skuId: t.skuId,
              isCardHovered: et
            })]
          }), es && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: O.wY
            }), (0, a.jsxs)("div", {
              className: O.xQ,
              children: [ei && (0, a.jsxs)("div", {
                className: O.xE,
                children: [!(r && T) && (0, a.jsxs)("div", {
                  className: O.Ly,
                  children: [!r && (0, a.jsx)(g.A, {
                    skuId: t.skuId,
                    className: i()(V, O.tZ)
                  }), !T && (0, a.jsx)("div", {
                    className: O.oh,
                    "aria-hidden": true,
                    children: (0, a.jsx)(b.A, {
                      skuId: t.skuId,
                      prioritizedCurrency: K
                    })
                  })]
                }), el && (0, a.jsx)(y.A, {
                  skuId: t.skuId,
                  isCollapsed: !et,
                  onVariantEnter: Q,
                  onVariantExit: Y
                })]
              }), er && (0, a.jsx)("div", {
                className: O.Vs,
                children: (0, a.jsxs)(c.ButtonGroup, {
                  wrap: false,
                  className: O.Ld,
                  fullWidth: true,
                  children: [!N && (0, a.jsx)(v.A, {
                    skuId: t.skuId,
                    cardRef: ee,
                    onClick: R,
                    text: G,
                    prioritizedCurrency: K,
                    onClickAnalytics: z
                  }), !w && (0, a.jsx)(j.A, {
                    skuId: t.skuId,
                    cardRef: ee,
                    onClick: D,
                    icon: F,
                    prioritizedCurrency: K,
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
  T = e => {
    let {
      skuId: t
    } = e, n = function(e, t) {
      if (null == e) return {};
      var n, a, l, r = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
        return r
      }
      if (r = function(e, t) {
          if (null == e) return {};
          var n, a, l = {},
            r = Object.getOwnPropertyNames(e);
          for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
      return r
    }(e, ["skuId"]), l = (0, _.Vm)(t);
    return null == l ? null : (0, a.jsx)(E, function(e) {
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