/** Chunk was on 71387 **/
/** chunk id: 453713, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk270132 = require("./270132.js");

function h(e) {
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

function O(e, t) {
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

function y(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}
let j = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let r = (0, d._i)(e);
      null != r && (t = .3 >= (0, d.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  _ = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: a,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: v,
      minimal: _
    } = e, {
      isPurchased: P
    } = (0, b.L)(r), x = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)), {
      onFocus: w
    } = x, C = y(x, ["onFocus"]), S = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, f.$)(t, a), w()
    }, [w, t, a]);
    return (0, n.jsx)(p.ua7, {
      text: m.intl.string(m.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !_ && P,
      children: e => (0, n.jsx)(p.P3F, O(h({}, C), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          v(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          v(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: S,
        onKeyDown: e => {
          e.key === u.R8.ENTER && S(e)
        },
        className: g.colorVariant,
        children: (0, n.jsx)("div", {
          className: l()(g.colorSwatch, {
            [g.open]: !_,
            [g.selected]: a === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: o - a
          },
          children: P ? (0, n.jsx)(p.kSu, {
            className: g.purchasedIndicator,
            color: j(r.variantValue)
          }) : null
        })
      }))
    })
  },
  P = e => {
    var t, r;
    let {
      variantGroupProduct: i,
      className: a,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: f,
      alternativeBackgroundColor: b
    } = e, j = o.previewingVariantIndex, P = null == (t = i.variants) ? true : t[f], x = null !== j ? null == (r = i.variants) ? true : r[j] : true, w = (0, v.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == P) return null;
    let C = null != x ? x.variantLabel : null == P ? true : P.variantLabel;
    return (0, n.jsx)(c.bG, {
      navigator: w,
      children: (0, n.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: r
            } = e,
            c = y(e, ["ref"]);
          return (0, n.jsxs)("div", O(h({
            ref: r
          }, c), {
            className: l()(g.variantsPanel, a, {
              [g.minimalState]: d,
              [g.alternativeColor]: b
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, n.jsx)("ol", {
              className: g.variantsList,
              children: null == (t = i.variants) ? true : t.map((e, t) => {
                var r, a;
                return (0, n.jsx)(_, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: f,
                  totalVariants: null != (a = null == (r = i.variants) ? true : r.length) ? a : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: g.variantLabel,
              children: d ? m.intl.string(m.t.wbgaj4) : C
            })]
          }))
        }
      })
    })
  }