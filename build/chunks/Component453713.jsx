/** Chunk was on 45620 **/
/** chunk id: 453713, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk820612 = require("./820612.js");

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

function v(e, t) {
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
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let C = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let r = (0, d._i)(e);
      null != r && (t = .3 >= (0, d.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  E = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: a,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: g,
      minimal: E
    } = e, {
      isPurchased: S
    } = (0, b.L)(r), y = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)), {
      onFocus: x
    } = y, j = O(y, ["onFocus"]), T = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, f.$)(t, a), x()
    }, [x, t, a]);
    return (0, n.jsx)(p.ua7, {
      text: h.intl.string(h.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !E && S,
      children: e => (0, n.jsx)(p.P3F, v(_({}, j), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          g(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          g(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: T,
        onKeyDown: e => {
          e.key === u.R8.ENTER && T(e)
        },
        className: m.colorVariant,
        children: (0, n.jsx)("div", {
          className: i()(m.colorSwatch, {
            [m.open]: !E,
            [m.selected]: a === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: o - a
          },
          children: S ? (0, n.jsx)(p.kSu, {
            className: m.purchasedIndicator,
            color: C(r.variantValue)
          }) : null
        })
      }))
    })
  },
  S = e => {
    var t, r;
    let {
      variantGroupProduct: l,
      className: a,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: f,
      alternativeBackgroundColor: b
    } = e, C = o.previewingVariantIndex, S = null == (t = l.variants) ? true : t[f], y = null !== C ? null == (r = l.variants) ? true : r[C] : true, x = (0, g.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
    if (null == S) return null;
    let j = null != y ? y.variantLabel : null == S ? true : S.variantLabel;
    return (0, n.jsx)(c.bG, {
      navigator: x,
      children: (0, n.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: r
            } = e,
            c = O(e, ["ref"]);
          return (0, n.jsxs)("div", v(_({
            ref: r
          }, c), {
            className: i()(m.variantsPanel, a, {
              [m.minimalState]: d,
              [m.alternativeColor]: b
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, n.jsx)("ol", {
              className: m.variantsList,
              children: null == (t = l.variants) ? true : t.map((e, t) => {
                var r, a;
                return (0, n.jsx)(E, {
                  variantGroupProduct: l,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: f,
                  totalVariants: null != (a = null == (r = l.variants) ? true : r.length) ? a : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: m.variantLabel,
              children: d ? h.intl.string(h.t.wbgaj4) : j
            })]
          }))
        }
      })
    })
  }