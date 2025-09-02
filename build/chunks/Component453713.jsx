/** Chunk was on web.js **/
/** chunk id: 453713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => A
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
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270132 = require("./270132.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
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
    return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  T = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: a,
      totalVariants: s,
      selectedVariantIndex: l,
      onEnter: d,
      onLeave: _,
      minimal: E
    } = e, {
      isPurchased: y
    } = (0, h.L)(n), I = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)), {
      onFocus: T
    } = I, A = v(I, ["onFocus"]), C = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, p.$)(t, a), T()
    }, [T, t, a]);
    return (0, r.jsx)(f.ua7, {
      text: m.intl.string(m.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !E && y,
      children: e => (0, r.jsx)(f.P3F, O(b({}, A), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          _(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          _(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: C,
        onKeyDown: e => {
          e.key === u.R8.ENTER && C(e)
        },
        className: g.colorVariant,
        children: (0, r.jsx)("div", {
          className: o()(g.colorSwatch, {
            [g.open]: !E,
            [g.selected]: a === l
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: s - a
          },
          children: y ? (0, r.jsx)(f.kSu, {
            className: g.purchasedIndicator,
            color: S(n.variantValue)
          }) : null
        })
      }))
    })
  },
  A = e => {
    var t, n;
    let {
      variantGroupProduct: i,
      className: a,
      previewingVariantIndexProps: s,
      setIsHoveringOnSwitch: l,
      minimal: d,
      selectedVariantIndex: p,
      alternativeBackgroundColor: h
    } = e, E = s.previewingVariantIndex, y = null == (t = i.variants) ? true : t[p], I = null !== E ? null == (n = i.variants) ? true : n[E] : true, S = (0, _.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == y) return null;
    let A = null != I ? I.variantLabel : null == y ? true : y.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: S,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = v(e, ["ref"]);
          return (0, r.jsxs)("div", O(b({
            ref: n
          }, c), {
            className: o()(g.variantsPanel, a, {
              [g.minimalState]: d,
              [g.alternativeColor]: h
            }),
            onMouseEnter: () => null == l ? true : l(true),
            onMouseLeave: () => null == l ? true : l(false),
            children: [(0, r.jsx)("ol", {
              className: g.variantsList,
              children: null == (t = i.variants) ? true : t.map((e, t) => {
                var n, a;
                return (0, r.jsx)(T, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: p,
                  totalVariants: null != (a = null == (n = i.variants) ? true : n.length) ? a : 0,
                  onEnter: () => s.handleEntering(t),
                  onLeave: s.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(f.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: g.variantLabel,
              children: d ? m.intl.string(m.t.wbgaj4) : A
            })]
          }))
        }
      })
    })
  }