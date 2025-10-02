/** Chunk was on 68255 **/
/** chunk id: 453713, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P: () => x
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
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270132 = require("./270132.js");

function g(e) {
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

function m(e, t) {
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

function j(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let h = s()(e => {
    let t = false;
    if (null != e && (0, d.FX)(e)) {
      let r = (0, d._i)(e);
      null != r && (t = .3 >= (0, d.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  P = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: i,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: f,
      minimal: P
    } = e, {
      isPurchased: x
    } = (0, y.L)(r), E = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: _
    } = E, w = j(E, ["onFocus"]), C = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, b.$)(t, i), _()
    }, [_, t, i]);
    return (0, n.jsx)(p.ua7, {
      text: O.intl.string(O.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: !P && x,
      children: e => (0, n.jsx)(p.P3F, m(g({}, w), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          f(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          f(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: C,
        onKeyDown: e => {
          e.key === u.R8.ENTER && C(e)
        },
        className: v.colorVariant,
        children: (0, n.jsx)("div", {
          className: a()(v.colorSwatch, {
            [v.open]: !P,
            [v.selected]: i === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: o - i
          },
          children: x ? (0, n.jsx)(p.kSu, {
            className: v.purchasedIndicator,
            color: h(r.variantValue)
          }) : null
        })
      }))
    })
  },
  x = e => {
    var t, r;
    let {
      variantGroupProduct: l,
      className: i,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: d,
      selectedVariantIndex: b,
      alternativeBackgroundColor: y
    } = e, h = o.previewingVariantIndex, x = null == (t = l.variants) ? true : t[b], E = null !== h ? null == (r = l.variants) ? true : r[h] : true, _ = (0, f.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
    if (null == x) return null;
    let w = null != E ? E.variantLabel : null == x ? true : x.variantLabel;
    return (0, n.jsx)(c.bG, {
      navigator: _,
      children: (0, n.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: r
            } = e,
            c = j(e, ["ref"]);
          return (0, n.jsxs)("div", m(g({
            ref: r
          }, c), {
            className: a()(v.variantsPanel, i, {
              [v.minimalState]: d,
              [v.alternativeColor]: y
            }),
            onMouseEnter: () => null == s ? true : s(true),
            onMouseLeave: () => null == s ? true : s(false),
            children: [(0, n.jsx)("ol", {
              className: v.variantsList,
              children: null == (t = l.variants) ? true : t.map((e, t) => {
                var r, i;
                return (0, n.jsx)(P, {
                  variantGroupProduct: l,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: b,
                  totalVariants: null != (i = null == (r = l.variants) ? true : r.length) ? i : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: v.variantLabel,
              children: d ? O.intl.string(O.t.wbgaj4) : w
            })]
          }))
        }
      })
    })
  }