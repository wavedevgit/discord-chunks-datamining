/** Chunk was on 96910 **/
/** chunk id: 453713, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk404759 = require("./404759.js"),
  s = require.n(Chunk404759),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196137 = require("./196137.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var r, n, a = function(e, t) {
    if (null == e) return {};
    var r, n, a = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
  }
  return a
}
let y = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let r = (0, d._i)(e);
      null != r && (t = .3 >= (0, d.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  C = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: i,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: b,
      minimal: C
    } = e, {
      isPurchased: j
    } = (0, f.L)(r), P = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: E
    } = P, x = O(P, ["onFocus"]), S = a.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, h.$)(t, i), E()
    }, [E, t, i]);
    return (0, n.jsx)(p.ua7, {
      text: v.intl.string(v.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !C && j,
      children: e => (0, n.jsx)(p.P3F, g(_({}, x), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          b(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          b(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: S,
        onKeyDown: e => {
          e.key === u.R8.ENTER && S(e)
        },
        className: m.colorVariant,
        children: (0, n.jsx)("div", {
          className: l()(m.colorSwatch, {
            [m.open]: !C,
            [m.selected]: i === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: o - i
          },
          children: j ? (0, n.jsx)(p.kSu, {
            className: m.purchasedIndicator,
            color: y(r.variantValue)
          }) : null
        })
      }))
    })
  },
  j = e => {
    var t, r;
    let {
      variantGroupProduct: a,
      className: i,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: h,
      alternativeBackgroundColor: f
    } = e, y = o.previewingVariantIndex, j = null == (t = a.variants) ? true : t[h], P = null !== y ? null == (r = a.variants) ? true : r[y] : true, E = (0, b.Z)("shop-variants-group-".concat(a.storeListingId), u.hy.HORIZONTAL);
    if (null == j) return null;
    let x = null != P ? P.variantLabel : null == j ? true : j.variantLabel;
    return (0, n.jsx)(c.bG, {
      navigator: E,
      children: (0, n.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: r
            } = e,
            c = O(e, ["ref"]);
          return (0, n.jsxs)("div", g(_({
            ref: r
          }, c), {
            className: l()(m.variantsPanel, i, {
              [m.minimalState]: d,
              [m.alternativeColor]: f
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, n.jsx)("ol", {
              className: m.variantsList,
              children: null == (t = a.variants) ? true : t.map((e, t) => {
                var r, i;
                return (0, n.jsx)(C, {
                  variantGroupProduct: a,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: h,
                  totalVariants: null != (i = null == (r = a.variants) ? true : r.length) ? i : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: m.variantLabel,
              children: d ? v.intl.string(v.t.wbgaj4) : x
            })]
          }))
        }
      })
    })
  }