/** Chunk was on 48502 **/
/** chunk id: 453713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function h(e) {
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

function v(e, t) {
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
}
let x = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  P = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: i,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: b,
      minimal: P
    } = e, {
      isPurchased: E
    } = (0, O.L)(n), _ = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: C
    } = _, A = j(_, ["onFocus"]), S = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, y.$)(t, i), C()
    }, [C, t, i]);
    return (0, r.jsx)(p.u, {
      text: m.intl.string(m.t["6cfuDj"]),
      "aria-label": false,
      shouldShow: !P && E,
      asContainer: true,
      children: (0, r.jsx)(f.P3F, v(h({}, A), {
        tag: "li",
        onMouseEnter: () => {
          d()
        },
        onMouseLeave: () => {
          b()
        },
        onFocus: () => {
          d()
        },
        onBlur: () => {
          b()
        },
        onClick: S,
        onKeyDown: e => {
          e.key === u.R8.ENTER && S(e)
        },
        className: g.colorVariant,
        children: (0, r.jsx)("div", {
          className: a()(g.colorSwatch, {
            [g.open]: !P,
            [g.selected]: i === s
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: o - i
          },
          children: E ? (0, r.jsx)(f.kSu, {
            className: g.purchasedIndicator,
            color: x(n.variantValue)
          }) : null
        })
      }))
    })
  },
  E = e => {
    var t, n;
    let {
      variantGroupProduct: l,
      className: i,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: p,
      alternativeBackgroundColor: y
    } = e, O = o.previewingVariantIndex, x = null == (t = l.variants) ? true : t[p], E = null !== O ? null == (n = l.variants) ? true : n[O] : true, _ = (0, b.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
    if (null == x) return null;
    let C = null != E ? E.variantLabel : null == x ? true : x.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: _,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = j(e, ["ref"]);
          return (0, r.jsxs)("div", v(h({
            ref: n
          }, c), {
            className: a()(g.variantsPanel, i, {
              [g.minimalState]: d,
              [g.alternativeColor]: y
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, r.jsx)("ol", {
              className: g.variantsList,
              children: null == (t = l.variants) ? true : t.map((e, t) => {
                var n, i;
                return (0, r.jsx)(P, {
                  variantGroupProduct: l,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: p,
                  totalVariants: null != (i = null == (n = l.variants) ? true : n.length) ? i : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(f.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: g.variantLabel,
              children: d ? m.intl.string(m.t.wbgaj6) : C
            })]
          }))
        }
      })
    })
  }