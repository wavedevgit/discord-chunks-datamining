/** Chunk was on web.js **/
/** chunk id: 453713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk404759 = require("./404759.js"),
  l = require.n(Chunk404759),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk866442 = require("./866442.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270132 = require("./270132.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = l()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? _.TVs.unsafe_rawColors.PRIMARY_700.css : _.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  A = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: a,
      totalVariants: s,
      selectedVariantIndex: l,
      onEnter: d,
      onLeave: p,
      minimal: b
    } = e, {
      isPurchased: O
    } = (0, m.L)(n), T = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)), {
      onFocus: A
    } = T, C = I(T, ["onFocus"]), N = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, h.$)(t, a), A()
    }, [A, t, a]);
    return (0, r.jsx)(f.u, {
      text: g.intl.string(g.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !b && O,
      asContainer: true,
      children: (0, r.jsx)(_.P3F, v(y({}, C), {
        tag: "li",
        onMouseEnter: () => {
          d()
        },
        onMouseLeave: () => {
          p()
        },
        onFocus: () => {
          d()
        },
        onBlur: () => {
          p()
        },
        onClick: N,
        onKeyDown: e => {
          e.key === u.R8.ENTER && N(e)
        },
        className: E.colorVariant,
        children: (0, r.jsx)("div", {
          className: o()(E.colorSwatch, {
            [E.open]: !b,
            [E.selected]: a === l
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: s - a
          },
          children: O ? (0, r.jsx)(_.kSu, {
            className: E.purchasedIndicator,
            color: S(n.variantValue)
          }) : null
        })
      }))
    })
  },
  C = e => {
    var t, n;
    let {
      variantGroupProduct: i,
      className: a,
      previewingVariantIndexProps: s,
      setIsHoveringOnSwitch: l,
      minimal: d,
      selectedVariantIndex: f,
      alternativeBackgroundColor: h
    } = e, m = s.previewingVariantIndex, b = null == (t = i.variants) ? true : t[f], O = null !== m ? null == (n = i.variants) ? true : n[m] : true, T = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == b) return null;
    let S = null != O ? O.variantLabel : null == b ? true : b.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: T,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = I(e, ["ref"]);
          return (0, r.jsxs)("div", v(y({
            ref: n
          }, c), {
            className: o()(E.variantsPanel, a, {
              [E.minimalState]: d,
              [E.alternativeColor]: h
            }),
            onMouseEnter: () => null == l ? true : l(true),
            onMouseLeave: () => null == l ? true : l(false),
            children: [(0, r.jsx)("ol", {
              className: E.variantsList,
              children: null == (t = i.variants) ? true : t.map((e, t) => {
                var n, a;
                return (0, r.jsx)(A, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: f,
                  totalVariants: null != (a = null == (n = i.variants) ? true : n.length) ? a : 0,
                  onEnter: () => s.handleEntering(t),
                  onLeave: s.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(_.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: E.variantLabel,
              children: d ? g.intl.string(g.t.wbgaj4) : S
            })]
          }))
        }
      })
    })
  }