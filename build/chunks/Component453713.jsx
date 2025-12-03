/** Chunk was on 2026 **/
/** chunk id: 453713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk404759 = require("./404759.js"),
  s = require.n(Chunk404759),
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

function x(e) {
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
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let O = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  _ = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: l,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: v,
      minimal: _
    } = e, {
      isPurchased: y
    } = (0, g.L)(n), C = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(l)), {
      onFocus: I
    } = C, S = j(C, ["onFocus"]), w = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, f.$)(t, l), I()
    }, [I, t, l]);
    return (0, r.jsx)(m.u, {
      text: h.intl.string(h.t["6cfuDj"]),
      "aria-label": false,
      shouldShow: !_ && y,
      asContainer: true,
      children: (0, r.jsx)(p.P3F, P(x({}, S), {
        tag: "li",
        onMouseEnter: () => {
          d()
        },
        onMouseLeave: () => {
          v()
        },
        onFocus: () => {
          d()
        },
        onBlur: () => {
          v()
        },
        onClick: w,
        onKeyDown: e => {
          e.key === u.R8.ENTER && w(e)
        },
        className: b.colorVariant,
        children: (0, r.jsx)("div", {
          className: a()(b.colorSwatch, {
            [b.open]: !_,
            [b.selected]: l === s
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: o - l
          },
          children: y ? (0, r.jsx)(p.kSu, {
            className: b.purchasedIndicator,
            color: O(n.variantValue)
          }) : null
        })
      }))
    })
  },
  y = e => {
    var t, n;
    let {
      variantGroupProduct: i,
      className: l,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: m,
      alternativeBackgroundColor: f
    } = e, g = o.previewingVariantIndex, O = null == (t = i.variants) ? true : t[m], y = null !== g ? null == (n = i.variants) ? true : n[g] : true, C = (0, v.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == O) return null;
    let I = null != y ? y.variantLabel : null == O ? true : O.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: C,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = j(e, ["ref"]);
          return (0, r.jsxs)("div", P(x({
            ref: n
          }, c), {
            className: a()(b.variantsPanel, l, {
              [b.minimalState]: d,
              [b.alternativeColor]: f
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, r.jsx)("ol", {
              className: b.variantsList,
              children: null == (t = i.variants) ? true : t.map((e, t) => {
                var n, l;
                return (0, r.jsx)(_, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: m,
                  totalVariants: null != (l = null == (n = i.variants) ? true : n.length) ? l : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: b.variantLabel,
              children: d ? h.intl.string(h.t.wbgaj6) : I
            })]
          }))
        }
      })
    })
  }